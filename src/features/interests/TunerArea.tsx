import { useAppSelector } from "../../hooks/hooks"
import { useEffect, useState } from "react" 

import H1 from "../../components/headers/H1"
import H2 from "../../components/headers/H2"

const TunerArea = () => {

  const instrumentState = useAppSelector(state=>state.instrument)

  const [micStream,setMicStream] = useState<MediaStream>();
  // const [micConsent, setmicConsent] = useState<boolean>(false);

  // const handleConfimation = () => {
  //   setmicConsent(true);
  // }

  useEffect(()=>{
    instrumentState.id != '' ? console.log(instrumentState) : console.log('nothing yet')
  },[instrumentState])

  useEffect(()=>{

    const getMic = async () =>{
      try{
        const mainStream = await navigator.mediaDevices.getUserMedia({audio: true})
        mainStream ? setMicStream(mainStream) : null;
      }
      catch (error){
        console.error('Denied Access', error )
      }
    }
    getMic()  },[])


  useEffect(()=>{
    console.log(micStream ? micStream : null)
  },[micStream])

  return (
    <section className='w-full text-white pb-8 md:pb-10 lg:pb-16 pt-0 text-center relative'>

      <div className="w-full sticky top-0 py-4 md:py-10 z-10 bg-zinc-800 border-b-[1px] border-zinc-800 after:absolute after:w-full after:h-full after:bg-white after:bg-opacity-0 after:backdrop-blur-md  after:-z-[2] bg-opacity-80 overflow-hidden after:left-0 after:!top-0">
        <H1 additionalClasses={'!text-white'} headerText={`Lets Get Tuning  `} textIcon={undefined}/>
        <H2 additionalClasses={'!text-emerald-500'} headerText={`Your ${`${instrumentState ? instrumentState.description.replace('-',' ') : null } ${instrumentState.title}`}`} textIcon={undefined}/> 
      </div>

      <div className="w-full mx-auto md: md:w-11/12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-8 px-8 md:px-10 lg:px-16">
      
      </div>
    
    </section>  
  ) 
}

export default TunerArea