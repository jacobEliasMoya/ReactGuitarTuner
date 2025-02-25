import { useEffect, useState } from "react"
import AppStart from "./components/layout/AppStart"
import WhatsTuning from "./features/instrument/WhatsTuning";
import {  Route, Routes, useNavigate } from "react-router";
import TunerArea from "./features/selectedInstrument/TunerArea";
import { useAppSelector } from "./hooks/hooks";

function App() {

  const [isAppIitiated, setIsAppIitiated] = useState(false);
  const instrumentState = useAppSelector(state=>state.instrument)
  
  const navigate = useNavigate();

  const initializeApp = () => {
    setIsAppIitiated(true);
  }

  useEffect(()=>{
    // timeout to let the animation run
    isAppIitiated ? navigate('/instrument-selection') : null;
  },[isAppIitiated])

  useEffect(()=>{
    instrumentState && instrumentState.id != '' ? navigate('/instrument-display') : null;
  },[instrumentState])

  return (
      <main className='min-h-screen flex flex-col items-center justify-start  bg-auto bg-repeat bg-red-500'>
        <Routes>
          <Route path="/" element={<AppStart onclick={initializeApp} additionalClasses={undefined} />} />
          <Route path="/instrument-selection" element={<WhatsTuning/>} />
          <Route path="/instrument-display" element={<TunerArea/>} />
        </Routes>
      </main>
  )
}

export default App
