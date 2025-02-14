import { useAppSelector } from "../../hooks/hooks"
import { useEffect, useState } from "react" 

import H1 from "../../components/headers/H1"
import H2 from "../../components/headers/H2"
import H3 from "../../components/headers/H3"
import Paragraph from "../../components/paragraph/Paragraph"

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

    <div className="w-full sticky top-0 py-4 md:py-10 z-10 bg-zinc-800 border-b-[1px] border-zinc-800 after:absolute after:w-full after:h-full after:bg-white after:bg-opacity-0 after:backdrop-blur-md  after:-z-[2] bg-opacity-80 overflow-hidden after:left-0 after:!top-0">
      <H1 additionalClasses={'!text-white'} headerText={`Lets Get Tuning  `} textIcon={undefined}/>
      <H2 additionalClasses={'!text-emerald-500'} headerText={`Your ${`${instrumentState ? instrumentState.description.replace('-',' ') : null } ${instrumentState.title}`}`} textIcon={undefined}/> 
    </div>

    <div className="w-full mx-auto md:w-11/12 flex items-center justify-center flex-col gap-4 md:gap-6  px-8 md:px-10 lg:px-16 mt-16 md:mt-20 ">
      <div className="w-36 h-36 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-zinc-800 rounded-full flex items-center justify-center border-2 md:border-4 border-emerald-600">
        <H3 additionalClasses={"!text-5xl md:!text-7xl lg:!text-8xl text-emerald-500 !font-secondary !font-medium"} headerText={"A#"} textIcon={undefined} />
      </div>    
    </div>

    <div className="w-full mx-auto md:w-11/12 flex items-center justify-center flex-col gap-4  px-8 md:px-10 lg:px-16 mt-16 md:mt-20 ">
      <H3 additionalClasses={'!font-medium !font-secondary'} headerText={"Sounds Great"} textIcon={undefined}/>
      <Paragraph additionalClasses={"text-emerald-500"} paragraphText={"123.4"} />
    </div>

    <div className="w-full mx-auto md:w-11/12 flex flex-row items-end justify-between gap-4 px-8 md:px-10 lg:px-16 mt-16 ">


      <div className="w-1 h-5 md:h-10 bg-zinc-600 rounded-full"></div>
      <div className="w-1 h-11 md:h-16 bg-zinc-600 rounded-full"></div>
      <div className="w-1 h-16 md:h-20 bg-zinc-600 rounded-full"></div>
      <div className="w-1 h-20 md:h-24 bg-zinc-600 rounded-full"></div>
      <div className="w-1 h-24 md:h-32 bg-zinc-600 rounded-full"></div>
      <div className="w-1 h-28 md:h-36 bg-zinc-600 rounded-full"></div>

      <div className="w-[1px] h-32 md:h-40 bg-red-600 rounded-full absolute left-[24%]"></div>


      <div className="w-1 h-24 md:h-32 bg-zinc-600 rounded-full"></div>
      <div className="w-1 h-20 md:h-24 bg-zinc-600 rounded-full"></div>
      <div className="w-1 h-16 md:h-20 bg-zinc-600 rounded-full"></div>
      <div className="w-1 h-11 md:h-16 bg-zinc-600 rounded-full"></div>
      <div className="w-1 h-5 md:h-10 bg-zinc-600 rounded-full"></div>
    </div>
  
    <div className="w-full sticky top-0 flex flex-row items-end justify-evenly gap-4 p-4 md:p-9 lg:p-11 bg-zinc-950 border-b-[1px] border-zinc-800 after:absolute after:w-full after:h-full after:bg-white after:bg-opacity-0 after:backdrop-blur-md  after:-z-[2] bg-opacity-80 overflow-hidden after:left-0 after:!top-0  mt-16 md:mt-20 text-xs md:text-md lg:text-2xl font-secondary">
     
      <div className="w-7 h-7 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-zinc-500 border-2 border-zinc-600 rounded-full flex items-center justify-center">A</div>
      <div className="w-7 h-7 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-zinc-500 border-2 border-zinc-600 rounded-full flex items-center justify-center">B</div>
      <div className="w-7 h-7 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-zinc-500 border-2 border-zinc-600 rounded-full flex items-center justify-center">C</div>
      <div className="w-7 h-7 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-zinc-500 border-2 border-zinc-600 rounded-full flex items-center justify-center">D</div>
      <div className="w-7 h-7 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-zinc-500 border-2 border-zinc-600 rounded-full flex items-center justify-center">E</div>
      <div className="w-7 h-7 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-zinc-500 border-2 border-white rounded-full flex items-center justify-center">F</div>

    </div>

  </section>  
) 
}

export default TunerArea