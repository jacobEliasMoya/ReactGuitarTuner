import { useAppSelector } from "../../hooks/hooks"
import { useEffect, useRef} from "react" 

import H1 from "../../components/headers/H1"
import H2 from "../../components/headers/H2"
import NoteDisplay from "../../components/tuner/NoteMainDisplay"
import CalibrationDisplay from "../../components/tuner/CalibrationDisplay"
import TuningNotes from "../../components/tuner/TuningNotes"

const TunerArea = () => {

  const instrumentState = useAppSelector(state=>state.instrument)
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioAnalyserRef = useRef<AnalyserNode | null>(null);
  const dataArRef = useRef<Uint8Array | null>(null);


  useEffect(()=>{

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

    const contextStreamConnect = async () => {

      const micStream = await getMicStream();

      if(!micStream){ return }

      const audioContext = getAudioContext();
      const audioAnalyser = getAudioAnalyser(audioContext); 

      const source = audioContext.createMediaStreamSource(micStream);
      source.connect(audioAnalyser);

      audioContextRef.current = audioContext;
      audioAnalyserRef.current = audioAnalyser;
      dataArRef.current = new Uint8Array(audioAnalyser.frequencyBinCount);

      const updateData = () => {
        if (audioAnalyserRef.current && dataArRef.current) {
          audioAnalyserRef.current.getByteFrequencyData(dataArRef.current);
          console.log(dataArRef.current); 
        }
  
        requestAnimationFrame(updateData);
      };
  
      updateData();

    }
    
    contextStreamConnect();

  },[])

 
  return (
    <section className='w-full min-h-screen text-white pt-0 text-center relative flex items-start justify-between flex-col'>

      <div className="w-full sticky top-0 py-4 md:py-10 z-10 bg-zinc-800 border-b-[1px] border-zinc-700 after:absolute after:w-full after:h-full after:bg-white after:bg-opacity-0 after:backdrop-blur-md  after:-z-[2] bg-opacity-80 overflow-hidden after:left-0 after:!top-0">
        <H1 additionalClasses={'!text-white'} headerText={`Lets Get Tuning  `} textIcon={undefined}/>
        <H2 additionalClasses={' !text-emerald-500'} headerText={`Your ${`${instrumentState ? instrumentState.description.replace('-',' ') : null } ${instrumentState.title}`}`} textIcon={undefined}/> 
      </div>

      <div className="w-full flex flex-col gap-20 items-end justify-center px-8">

        <div className="w-full mx-auto md:w-11/12 flex items-center justify-center flex-col gap-4 md:gap-6  px-8 md:px-10 lg:px-16 md:mt-20 ">
          <NoteDisplay note={instrumentState.standardTuning[0]} supportiveText={"Almost in Tune"} hurtz={10.25}/>
        </div>

        <CalibrationDisplay calibrationNeedle={66}/>

      </div>

      <div className="w-full flex flex-row justify-center lg:p-11 bg-zinc-800 border-t-[1px] border-zinc-700 after:absolute after:w-full after:h-full after:bg-white after:bg-opacity-0 after:backdrop-blur-md  after:-z-[2] bg-opacity-80 overflow-hidden after:left-0 after:!top-0 md:mt-20 text-xs md:text-md lg:text-xl font-secondary ">
        <div className="w-full lg:w-1/2 flex flex-row justify-center lg:rounded-3xl overflow-hidden border-4 border-t-zinc-700 border-r-zinc-700 border-b-zinc-900 border-zinc-900">
          <TuningNotes notes={instrumentState.standardTuning}/>
        </div>
      </div>

    </section>  
  ) 
}

export default TunerArea