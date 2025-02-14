import axios from "axios"

import { useEffect, useState } from "react" 
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { setInstrument } from "./instrumentSlice"

import Paragraph from "../../components/paragraph/Paragraph"
import H1 from "../../components/headers/H1"
import H2 from "../../components/headers/H2"
import H3 from "../../components/headers/H3"
import H4 from "../../components/headers/H4"
import ConfirmationPopup from "../../components/widgets/ConfirmationPopup"

interface WhatsTuningProps {
  key:number,
  image:string,
  title:string,
  description:string,
  id:string
}

const WhatsTuning = () => {

  const [tuningSelection, setTuningSelection] = useState<WhatsTuningProps[]>()
  const [selectedInstrument, setselectedInstrument] = useState<WhatsTuningProps>()

  const [isModuleActive, setIsModuleActive] = useState<boolean>(false);

  const instrumentState = useAppSelector(state=>state.instrument)
  const dispatch = useAppDispatch();

  const handleClick = (item:WhatsTuningProps) => {
    // item ? dispatch(setInstrument(item)) : null;
    item ? setselectedInstrument(item) : null
  }

  const setModule = () =>{
    setIsModuleActive(prev => !prev)
  }

  const closeModule = () =>{
    setIsModuleActive(false)
  }

  const confirmModule = () =>{
    selectedInstrument ? dispatch(setInstrument(selectedInstrument)) : null;
    setIsModuleActive(false)
  }

  // testing out axios for restufl API calls <3
  useEffect(()=>{
    axios
      .get('/instruments.json')
      .then((resp)=>{
        setTuningSelection(resp.data.instruments)
      })
  },[])

  useEffect(()=>{
    selectedInstrument ? setModule() :  null;
  },[selectedInstrument])

  return (
    <section className='w-full text-white pb-8 md:pb-10 lg:pb-16 pt-0 text-center relative'>
      
      <div className="w-full sticky top-0 py-4 md:py-10 z-10 bg-zinc-800 border-b-[1px] border-zinc-800 after:absolute after:w-full after:h-full after:bg-white after:bg-opacity-0 after:backdrop-blur-md  after:-z-[2] bg-opacity-80 overflow-hidden after:left-0 after:!top-0">
        <H1 additionalClasses={'!text-white'} headerText={`What are you `} textIcon={undefined}/>
        <H2 additionalClasses={'!text-emerald-500'} headerText={` tuning today`} textIcon={undefined}/>
        {instrumentState ? 
        <Paragraph additionalClasses={undefined} paragraphText={`// You have selected  ${instrumentState ? instrumentState.description.replace('-',' ') : null } ${instrumentState.title}`} /> : 
        <Paragraph additionalClasses={undefined} paragraphText={"// select an instrument"} />}
      </div>
      
      <div className="w-full mx-auto md:w-11/12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-8 px-8 md:px-10 lg:px-16">
      
      {tuningSelection?.map((item)=>(
        <div onClick={()=>{handleClick(item)}} id={item.id} key={item.key} className="cursor-pointer w-full col bg-zinc-800 rounded-xl py-8 px-4 flex items-center justify-start flex-col gap-2 md:gap-3   transition-all border-2 bg-opacity-50 border-zinc-900 hover:border-emerald-400  active:border-emerald-300 after:absolute after:w-full after:h-full after:bg-white after:bg-opacity-0 after:backdrop-blur-sm relative after:-z-[2] z-0 overflow-hidden">
            <div className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40  rounded-full bg-cover bg-center mb-3 "
              style={{
                backgroundImage:`url(${item.image})`
              }}
            ></div>
            <H3 additionalClasses={'!text-white'} headerText={item.title} textIcon={undefined}/>              
            <H4 additionalClasses={'!text-emerald-500'} headerText={item.description} textIcon={undefined}/>
          </div>        
        ))}
      </div>
    
      <ConfirmationPopup moduleBool={isModuleActive} widgetText={`${selectedInstrument ? selectedInstrument.description.replace('-', ' ') : null} ${selectedInstrument ? selectedInstrument.title : null}`} confirmClick={confirmModule} closeClick={closeModule} confirmationText={"Please Confirm Your Selection:"}/>
    </section>  
  ) 
}

export default WhatsTuning