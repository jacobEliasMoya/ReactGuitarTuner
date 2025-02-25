import { useRef } from "react"

type Props = {
    calibrationNeedle: number
}

const CalibrationDisplay = (props: Props) => {

  const tuningNeedle = useRef<HTMLDivElement>(null)

  return (
      <div className="w-full mx-auto md:w-2/3 lg:w-1/2 flex flex-row items-end justify-between gap-4  bg-white p-8 md:p-16  rounded-3xl relative  overflow-hidden">

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

        <div ref={tuningNeedle} className="w-[4px] [box-shadow:0_0_.2em_black] h-28 md:h-48 bg-red-600 rounded-t-full-full absolute bottom-0 z-20 left-1/2 -translate-x-1/2 origin-[100%_100%] transition-all ease duration-[.1s]" 
          style={{
            transform: `rotate(${props.calibrationNeedle}deg)`
          }}
        ></div>
      </div>  
  )
}

export default CalibrationDisplay