import { useEffect, useState } from "react"
import AppStart from "./components/layout/AppStart"
import WhatsTuning from "./features/instrument/WhatsTuning";
import {  Route, Routes, useNavigate } from "react-router";

function App() {

  const [isAppIitiated, setIsAppIitiated] = useState(false);

  const navigate = useNavigate();

  const initializeApp = () => {
    setIsAppIitiated(true);
  }

  useEffect(()=>{
    isAppIitiated ? navigate(+1) : null;
  },[isAppIitiated])

  return (
      <main className='transition-all ease min-h-screen flex flex-col items-center justify-start  bg-auto bg-repeat bg-zinc-900'>
        <Routes>
          <Route path="/" element={<AppStart onclick={initializeApp} additionalClasses={!isAppIitiated ? 'animate-drop-n-rotate' : 'animate-drop-n-rotate-reverse'} />} />
          <Route path="/instrument-selection" element={<WhatsTuning/>} />
        </Routes>
      </main>
  )
}

export default App
