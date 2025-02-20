import { useRef } from "react"

type Props = {
    calibrationNeedle: number
}

const CalibrationDisplay = (props: Props) => {

  const tuningNeedle = useRef<HTMLDivElement>(null)

  return (
      <div className="w-full mx-auto md:w-2/3 lg:w-1/2 flex flex-row items-end justify-between gap-4  bg-white p-8 md:p-16 border-4 border-t-zinc-700 border-r-zinc-700 border-b-zinc-800 border-zinc-800  rounded-3xl relative after:absolute after:w-[500%] after:h-full z-[1] after:[background-image:_linear-gradient(45deg,rgba(0,0,0,.75)_45%,rgba(0,0,0,.45)_50%,rgba(0,0,0,.65)_55%)] after:opacity-85 after:left-[50%] after:-translate-x-1/2 after:top-0 overflow-hidden after:transition-all hover:after:left-[65%]">

        <div className="w-1 h-5 md:h-10 bg-zinc-600 rounded-full"></div>
        <div className="w-1 h-11 md:h-16 bg-zinc-600 rounded-full"></div>
        <div className="w-1 h-16 md:h-20 bg-zinc-600 rounded-full"></div>
        <div className="w-1 h-20 md:h-24 bg-zinc-600 rounded-full"></div>
        <div className="w-1 h-24 md:h-32 bg-zinc-600 rounded-full"></div>
        <div className="w-1 h-28 md:h-36 bg-zinc-600 rounded-full"></div>
        <div className="w-1 h-24 md:h-32 bg-zinc-600 rounded-full"></div>
        <div className="w-1 h-20 md:h-24 bg-zinc-600 rounded-full"></div>
        <div className="w-1 h-16 md:h-20 bg-zinc-600 rounded-full"></div>
        <div className="w-1 h-11 md:h-16 bg-zinc-600 rounded-full"></div>
        <div className="w-1 h-5 md:h-10 bg-zinc-600 rounded-full"></div>

        <div ref={tuningNeedle} className="w-[4px] [box-shadow:0_0_.2em_black] h-28 md:h-36 bg-red-600 rounded-t-full-full absolute bottom-0 z-20 " 
          style={{
            left:`${props.calibrationNeedle}%`
          }}
        ></div>
      </div>  
  )
}

export default CalibrationDisplay