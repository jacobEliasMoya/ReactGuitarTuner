import { useAppSelector } from "../../hooks/hooks"
import { useEffect, useState } from "react" 

import H1 from "../../components/headers/H1"
import H2 from "../../components/headers/H2"
import NoteDisplay from "../../components/tuner/NoteDisplay"
import CalibrationDisplay from "../../components/tuner/CalibrationDisplay"

const TunerArea = () => {

const instrumentState = useAppSelector(state=>state.instrument)

const [micStream,setMicStream] = useState<MediaStream>();
const [micContext,setMicContext] = useState<AudioContext>();

useEffect(()=>{

  const getAudioContext = () => {
    return new AudioContext();
  }

  const getMicStream = async () =>{
    try{
      return await navigator.mediaDevices.getUserMedia({audio: true})
    }
    catch (error){
      console.error('Denieeeeeeed', error )
    }
  }
  
  const contextStreamConnect = async () => {

    const micStream = await getMicStream();

    if(!micStream){ return };

    const audioContext = getAudioContext();
    console.log(micStream, audioContext)
  }

  contextStreamConnect();

  // return () =>{
  //   if(micStream) {
  //     micStream.getTracks().forEach(track=>track.stop())
  //   }
  // }

},[])

return (
  <section className='w-full min-h-screen text-white pt-0 text-center relative flex items-start justify-between flex-col'>

    <div className="w-full sticky top-0 py-4 md:py-10 z-10 bg-zinc-800 border-b-[1px] border-zinc-700 after:absolute after:w-full after:h-full after:bg-white after:bg-opacity-0 after:backdrop-blur-md  after:-z-[2] bg-opacity-80 overflow-hidden after:left-0 after:!top-0">

      <H1 additionalClasses={'!text-white'} headerText={`Lets Get Tuning  `} textIcon={undefined}/>
      <H2 additionalClasses={'!text-emerald-500'} headerText={`Your ${`${instrumentState ? instrumentState.description.replace('-',' ') : null } ${instrumentState.title}`}`} textIcon={undefined}/> 

    </div>

    <div className="w-full flex flex-col gap-20 items-end justify-center">

      <div className="w-full mx-auto md:w-11/12 flex items-center justify-center flex-col gap-4 md:gap-6  px-8 md:px-10 lg:px-16 md:mt-20 ">
        <NoteDisplay note={"A#"} supportiveText={"Almost in Tune"} hurtz={120}/>
      </div>

      <CalibrationDisplay calibrationNeedle={122}/>

    </div>

    <div className="w-full flex flex-row items-center justify-center gap-4 md:gap-8 p-4 md:p-9 lg:p-11 bg-zinc-800 border-t-[1px] border-zinc-700 after:absolute after:w-full after:h-full after:bg-white after:bg-opacity-0 after:backdrop-blur-md  after:-z-[2] bg-opacity-80 overflow-hidden after:left-0 after:!top-0 md:mt-20 text-xs md:text-md lg:text-xl font-secondary ">

      <div className="w-7 h-7 md:w-16 md:h-16 bg-zinc-500 border-2 border-zinc-600 hover:border-white cursor-pointer rounded-full flex items-center justify-center">A</div>
      <div className="w-7 h-7 md:w-16 md:h-16 bg-zinc-500 border-2 border-zinc-600 hover:border-white cursor-pointer rounded-full flex items-center justify-center">B</div>
      <div className="w-7 h-7 md:w-16 md:h-16 bg-zinc-500 border-2 border-zinc-600 hover:border-white cursor-pointer rounded-full flex items-center justify-center">C</div>
      <div className="w-7 h-7 md:w-16 md:h-16 bg-zinc-500 border-2 border-zinc-600 hover:border-white cursor-pointer rounded-full flex items-center justify-center">D</div>
      <div className="w-7 h-7 md:w-16 md:h-16 bg-zinc-500 border-2 border-zinc-600 hover:border-white cursor-pointer rounded-full flex items-center justify-center">E</div>
      <div className="w-7 h-7 md:w-16 md:h-16 bg-zinc-500 border-2 border-zinc-600 hover:border-white cursor-pointer rounded-full flex items-center justify-center">F</div>

    </div>

  </section>  
) 
}

export default TunerArea