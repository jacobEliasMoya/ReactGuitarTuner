import axios from "axios"

import { useEffect, useState } from "react" 
import { useAppDispatch } from "../../hooks/hooks"
import { setInstrument } from "./instrumentSlice"

import H1 from "../../components/headers/H1"
import H3 from "../../components/headers/H3"
import H4 from "../../components/headers/H4"
import ConfirmationPopup from "../../components/widgets/ConfirmationPopup"
import { InstrumentType } from "../../types/instrumentType"


const WhatsTuning = () => {

  const [tuningSelection, setTuningSelection] = useState<InstrumentType[]>()
  const [selectedInstrument, setselectedInstrument] = useState<InstrumentType>()

  const [isModuleActive, setIsModuleActive] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleClick = (item:InstrumentType) => {
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
    <section className='w-full min-h-dvh text-white pb-8 md:pb-10 lg:pb-16 pt-0 text-center relative'>
      
      <div className="w-full sticky top-0 py-4 md:py-10 z-10 bg-zinc-800 border-b-2  border-zinc-900 after:absolute after:w-full after:h-full after:bg-white after:bg-opacity-0 after:backdrop-blur-md  after:-z-[2] bg-opacity-70 overflow-hidden after:left-0 after:!top-0">
        <H1 additionalClasses={'!text-white'} headerText={`Please Select an Instrument`} textIcon={undefined}/>
      </div>
      
      <div className="w-full mx-auto md:w-10/12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-4 px-4 md:px-10 lg:px-16 md:mt-8">
        {tuningSelection?.map((item)=>(
          <div onClick={()=>{handleClick(item)}} id={item.id} key={item.key} className="cursor-pointer w-full col bg-zinc-800 rounded-xl  flex items-center justify-start flex-col border-2 bg-opacity-70 border-zinc-900 hover:border-white  active:border-emerald-300 relative z-0 overflow-hidden group">
              <div className="w-full h-2/3 flex items-center justify-center p-4">
                <div className="min-h-[33%] w-28 h-28 md:w-32 md:h-32 lg:w-40 lg:h-40  rounded-full bg-cover bg-center border-2 border-zinc-900 group-hover:border-white"
                style={{
                    backgroundImage:`url(${item.image})`
                  }}
                ></div>
              </div>

              <div className="h-1/3 border-t-2 border-zinc-900 w-full min-h-24 p-4 bg-red-500 flex items-center justify-center flex-col gap-2">
                <H3 additionalClasses={'!text-white '} headerText={item.title} textIcon={undefined}/>              
                <H4 additionalClasses={''} headerText={item.description} textIcon={undefined}/>
              </div>
            </div>        
          ))}
      </div>
    
      <ConfirmationPopup moduleBool={isModuleActive} widgetText={`${selectedInstrument ? selectedInstrument.description.replace('-', ' ') : null} ${selectedInstrument ? selectedInstrument.title : null}`} confirmClick={confirmModule} closeClick={closeModule} confirmationText={"Please Confirm Your Selection:"}/>
    </section>  
  ) 
}

export default WhatsTuning