import * as Pitchfinder from "pitchfinder"

import { useAppSelector } from "../../hooks/hooks"
import { useEffect, useRef, useState} from "react" 

import H2 from "../../components/headers/H2"
import NoteDisplay from "../../components/tuner/NoteMainDisplay"
import CalibrationDisplay from "../../components/tuner/CalibrationDisplay"
import TuningNotes from "../../components/tuner/TuningNotes"


const TunerArea = () => {

  const instrumentState = useAppSelector(state=>state.instrument); // my global state

  const [pitchHurtz, setPitchHurtz] = useState<number|null>(null)
  const [hurtzDiffernce, sethurtzDiffernce] = useState<number|null>(null)
  const [currentNote, setCurrentNote] = useState<string>("");
  const [almostTuned, setAlmostTuned] = useState<string>("")

  const audioContextRef = useRef<AudioContext | null>(null);
  const audioAnalyserRef = useRef<AnalyserNode | null>(null);
  const dataBuffer = useRef<Float32Array | null> (null);

  // ai taught me when it comes to music / audio streams classic for loops are the key ... lol me going straing to foreachs
  const approximateNote = (pitch:number) =>{

    const offset:number = 25;
    
    instrumentState.standardTuning.forEach((item)=>{
      if (pitch + offset > item.frequency &&   pitch - offset < item.frequency) {
        setAlmostTuned(`looks like your trying to tune ${item.note}`)
        setCurrentNote(`${item.note}`)
        sethurtzDiffernce(pitch- item.frequency)

        if (pitch + offset - 5 > item.frequency &&   pitch - offset - 5 < item.frequency) {
          setAlmostTuned(`Getting Closer to  ${item.note}`)
          setCurrentNote(`${item.note}`)
          sethurtzDiffernce(pitch- item.frequency)

          if (pitch + offset - 15 > item.frequency &&   pitch - offset - 15 < item.frequency) {
            setAlmostTuned(`Super Close ${item.note}`)
            setCurrentNote(`${item.note}`)
            sethurtzDiffernce(pitch- item.frequency)
            
            if (pitch + offset - 21 > item.frequency &&   pitch - offset - 21 < item.frequency) {
              setAlmostTuned(`Just a Hair off ${item.note}`)
              setCurrentNote(`${item.note}`)
              sethurtzDiffernce(pitch- item.frequency)

              if (pitch + offset - 24 > item.frequency &&   pitch - offset - 24 < item.frequency) {
                setAlmostTuned(`Pitch Perfect ${item.note} \n set to ${item.frequency}hz for perfection`)
                setCurrentNote(`${item.note}`)
                sethurtzDiffernce(pitch- item.frequency)
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
              approximateNote(pitch); 
              setPitchHurtz(pitch)
            }
        }
        requestAnimationFrame(updateData);
      };
      updateData();
    }
    contextStreamConnect();
  },[])

  return (
    <section className='w-full min-h-dvh text-white pt-0 text-center relative flex items-start justify-center flex-col'>

      <div className="w-full fixed top-0 py-4 md:py-10 z-10  border-b-2  border-zinc-900 after:absolute after:w-full after:h-full after:bg-white after:bg-opacity-0 after:backdrop-blur-md  after:-z-[2] bg-opacity-70 bg-zinc-800 overflow-hidden after:left-0 after:!top-0">
        <H2 additionalClasses={'!text-white'} headerText={`Lets Your ${instrumentState ? instrumentState.description.replace('-', ' ') + " " + instrumentState.title : null} Tuned`} textIcon={undefined}/>
      </div>

      <div className="w-full flex flex-col items-end justify-center px-8">
        <div className="w-full mx-auto md:w-11/12 flex items-center justify-center flex-col gap-2  px-8 md:px-10 lg:px-16  ">
          
          <NoteDisplay note={currentNote ? currentNote : ''} supportiveText={almostTuned ? almostTuned : "get plucking"} hurtz={pitchHurtz ? pitchHurtz.toFixed(2) : '0'}/>
          <CalibrationDisplay calibrationNeedle={hurtzDiffernce ? hurtzDiffernce : 0}/>

        </div>
      </div>

      <TuningNotes notes={instrumentState.standardTuning}/>


    </section>  
  ) 
}

export default TunerArea