import { useEffect, useState } from "react"
import AppStart from "./components/layout/AppStart"
import WhatsTuning from "./components/layout/WhatsTuning";
import leather from './assets/leather.webp';

interface GradientStarts {
  start: number;
  end: number;
}

function App() {

  const [isAppIitiated, setIsAppIitiated] = useState(false);
  const [gradientStarts, setGradientStarts] = useState<GradientStarts>({start:0, end:0});

  const handleClick = () => {
    setIsAppIitiated(true);
  }

  const handleGradient = () => {
    let x:number = setInterval(()=> {
      setGradientStarts((prev) => { 
        if(prev.start >= 100) {
          clearInterval(x);
          return prev
        } else {
          return {...prev, start: prev.start + 1, end: prev.end + 1}
        }
      })
    },1)
  }

  useEffect(() => {
    isAppIitiated ? handleGradient() : null;
  },[isAppIitiated])

  return (
    <main className='transition-all ease min-h-screen flex flex-col items-center justify-start overflow-hidden bg-auto bg-repeat'
      style={{
        backgroundImage: `url(${leather}), linear-gradient(180deg, #000000 ${gradientStarts.start}% , #111 )`,
      }}
    >
      <AppStart onclick={handleClick} additionalClasses={!isAppIitiated ? 'animate-drop-n-rotate' : 'animate-drop-n-rotate-reverse'}/>
      
      {isAppIitiated ? <WhatsTuning/> : null}
    </main>
  )
}

export default App
