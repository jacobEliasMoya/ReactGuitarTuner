import { useRef } from "react"

type Props = {
    calibrationNeedle: number
}

const CalibrationDisplay = (props: Props) => {

  const tuningNeedle = useRef<HTMLDivElement>(null)

  return (
      <div className="w-full sm:w-2/3 mx-auto lg:w-1/2 flex flex-row items-end justify-evenly lg:justify-center lg:gap-20  bg-white p-4 md:p-8  rounded-3xl relative  overflow-hidden">
        
        <div className="border-2 border-zinc-800 h-10 md:h-14 rounded-full"></div>
        <div className="border-2 border-zinc-800 h-14 md:h-20 rounded-full"></div>
        <div className="border-2 border-zinc-800 h-20 md:h-24 rounded-full"></div>
        <div className="border-2 border-zinc-800 h-14 md:h-20 rounded-full"></div>
        <div className="border-2 border-zinc-800 h-10 md:h-14 rounded-full"></div>

        <div ref={tuningNeedle} className="w-[2px] [box-shadow:0_0_.2em_black] h-96  bg-red-600 rounded-t-full-full absolute bottom-0 z-20 left-1/2 -translate-x-1/2 origin-[100%_100%] transition-all ease duration-[.1s]" 
          style={{
            transform: `rotate(${props.calibrationNeedle}deg)`
          }}
        ></div>
        
      </div>  
  )
}

export default CalibrationDisplay