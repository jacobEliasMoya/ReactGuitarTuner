import { useState } from "react"
import AppStart from "./components/layout/AppStart"

function App(props:Props) {

  const [isAppIitiated, setIsAppIitiated] = useState(false)

  const handleClick = (e:any) => {
    console.log(e)
  }

  return (
    <main className='bg-gradient-to-br from-zinc-800 to-zinc-950  min-h-screen flex flex-col items-center justify-center overflow-hidden'>  
      <AppStart/>
    </main>
  )
}

export default App
