import * as Pitchfinder from "pitchfinder"

import { useAppSelector } from "../../hooks/hooks"
import { useEffect, useRef, useState} from "react" 

import NoteDisplay from "../../components/tuner/NoteMainDisplay"
import CalibrationDisplay from "../../components/tuner/CalibrationDisplay"
import TuningNotes from "../../components/tuner/TuningNotes"
import { TuningInterface } from "../../types/tuningInterface"
import H3 from "../../components/headers/H3"

const TunerArea = () => {

  const instrumentState = useAppSelector(state=>state.instrument); // my global state
  const timeoutRef = useRef<number | null>(null);

  const initialTuning:TuningInterface = {
    almostTuned: '',
    currentNote: '',
    hurtzDiffernce: null,
    nearTuned:false,
    inTune:false,
    currentPitch:0
  }

  const [tuningInfo, setTuningInfo] = useState<TuningInterface>(initialTuning);

  const audioContextRef = useRef<AudioContext | null>(null);
  const audioAnalyserRef = useRef<AnalyserNode | null>(null);
  const dataBuffer = useRef<Float32Array | null> (null);

  const handleTuningInfo = (tuneText:string,s1:string,s2:string,s3:number,p:number,tuningLevel1:boolean,tuningLevel2:boolean) => {
    setTuningInfo((prev)=>({
      ...prev,
        almostTuned: `${tuneText} ${s1}`,
        currentNote: `${s2}`,
        hurtzDiffernce: p - s3,
        nearTuned:tuningLevel1,
        inTune:tuningLevel2,
    }))
  }

  const revertTuningInfo = () => {
    setTuningInfo((prev)=>({
      ...prev,
      ...initialTuning
    }))
  }

  const approximateNote = (pitch:number) =>{

    instrumentState.standardTuning.forEach((item)=>{
      if ( pitch > item.frequency - 25 && pitch  < item.frequency + 25 ) {
        handleTuningInfo('Trying to Tune ',item.note,item.note,item.frequency,pitch,false,false);
        if ( pitch > item.frequency - 20 && pitch  < item.frequency + 20 ) {
          handleTuningInfo('Getting Closer to ',item.note,item.note,item.frequency,pitch,false,false);
          if ( pitch > item.frequency - 15 && pitch  < item.frequency + 15 ) {
            handleTuningInfo('Super Close to ',item.note,item.note,item.frequency,pitch,true,false);
            if ( pitch > item.frequency - 5 && pitch  < item.frequency + 5 ) {
              handleTuningInfo('Just a Hair off ',item.note,item.note,item.frequency,pitch,true,false);
              if ( pitch > item.frequency - 1 && pitch  < item.frequency + 1 ) {
                handleTuningInfo('Pitch Perfect ',item.note,item.note,item.frequency,pitch,false,true);
              }
            }
          }
        }
      } 
    })
  }

  const getMicStream = async () =>{
    try{
      return await navigator.mediaDevices.getUserMedia({audio: true})
    }
    catch (error){
      console.error('Denieeeeeeed', error )
    }
  }
  
  const getAudioContext = () => {
    return new AudioContext();
  }

  const getAudioAnalyser = (audioContext:AudioContext) => {
    return  audioContext.createAnalyser();
  }

  const detectPitch = (audioCtx:number) => {
    return Pitchfinder.YIN({sampleRate:audioCtx,threshold: 0.1 });
  }

  useEffect(()=>{

    const contextStreamConnect = async () => {

      const micStream = await getMicStream();

      if(!micStream){ return } 

      const audioContext = getAudioContext();
      const audioAnalyser = getAudioAnalyser(audioContext); 
      // fun fact, higher fft = better low note detection ... just woah lol - audio crey 

      audioAnalyser.fftSize = 8192;
      const source = audioContext.createMediaStreamSource(micStream);
      const pitchDetect = detectPitch(audioContext.sampleRate);
      source.connect(audioAnalyser);
      audioContextRef.current = audioContext;
      audioAnalyserRef.current = audioAnalyser;
      dataBuffer.current = new Float32Array(audioAnalyser.fftSize);

      const updateData = () => {
        if (audioAnalyserRef.current && dataBuffer.current) {
          audioAnalyserRef.current.getFloatTimeDomainData(dataBuffer.current);
          const pitch = pitchDetect(dataBuffer.current);
            if(pitch && pitch < 5000){
              setTuningInfo((prev)=>(
                {...prev,
                  currentPitch:pitch
                }
              ))
            }
        }
        requestAnimationFrame(updateData);
      };

      updateData();

    }

    contextStreamConnect();

  },[])

  useEffect(()=>{

    tuningInfo.currentPitch ? approximateNote(tuningInfo.currentPitch) : null;

    if(timeoutRef.current){
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(revertTuningInfo, 2250);

    return ()=>{
      if(timeoutRef.current){
        clearTimeout(timeoutRef.current)
      }
    }

  },[tuningInfo.currentPitch])

  return (
    <section className='w-full min-h-dvh text-white pt-0 text-center relative flex items-start justify-center flex-col'>

      <div className="w-full fixed top-0 py-4 md:py-10 z-10 px-4 border-b-2  border-zinc-900 after:absolute after:w-full after:h-full after:bg-white after:bg-opacity-0 after:backdrop-blur-md  after:-z-[2] bg-opacity-70 bg-zinc-800 overflow-hidden after:left-0 after:!top-0">
        <H3 additionalClasses={'!text-white'} headerText={`Lets Get Your ${instrumentState ? instrumentState.description.replace('-', ' ') + " " + instrumentState.title : null} Tuned`} textIcon={undefined}/>
      </div>

      <div className="w-full flex flex-col items-end justify-center">
        <div className="w-full mx-auto md:w-11/12 flex items-center justify-center flex-col gap-2  px-8 md:px-10 lg:px-16  ">
          
          <NoteDisplay note={tuningInfo ? tuningInfo.currentNote : ''} supportiveText={tuningInfo.almostTuned ? tuningInfo.almostTuned : "get plucking"} hurtz={tuningInfo ? tuningInfo.currentPitch.toFixed(2) : '0'} almostTuned={tuningInfo.nearTuned} inTune={tuningInfo.inTune}/>
          <CalibrationDisplay calibrationNeedle={tuningInfo.hurtzDiffernce ? tuningInfo.hurtzDiffernce : 0}/>

        </div>
      </div>

      <TuningNotes notes={instrumentState.standardTuning}/>


    </section>  
  ) 
}

export default TunerArea