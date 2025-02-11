import { useState } from "react"
import AppStart from "./components/layout/AppStart"
import WhatsTuning from "./features/instrument/WhatsTuning";

function App() {

  const [isAppIitiated, setIsAppIitiated] = useState(false);

  const handleClick = () => {
    setIsAppIitiated(true);
  }

  return (
    <main className='transition-all ease min-h-screen flex flex-col items-center justify-start  bg-auto bg-repeat bg-zinc-900'>
      <AppStart onclick={handleClick} additionalClasses={!isAppIitiated ? 'animate-drop-n-rotate' : 'animate-drop-n-rotate-reverse'} />
      {isAppIitiated ? <WhatsTuning/> : null}
    </main>
  )
}

export default App
