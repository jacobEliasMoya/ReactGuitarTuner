import { useEffect, useState } from "react"
import AppStart from "./components/layout/AppStart"

function App() {

  const [isAppIitiated, setIsAppIitiated] = useState(false)


  const handleClick = () => {
    setIsAppIitiated(true);
  }

  useEffect(() => {
    console.log(isAppIitiated)
  },[isAppIitiated])

  return (
    <main className='bg-gradient-to-br from-zinc-800 to-zinc-950  min-h-screen flex flex-col items-center justify-center overflow-hidden'>  
      {isAppIitiated ? '' : <AppStart onclick={handleClick} additionalClasses={``}/>  } 
    </main>
  )
}

export default App
