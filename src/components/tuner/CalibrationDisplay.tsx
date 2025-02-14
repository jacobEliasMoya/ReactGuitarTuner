type Props = {
    calibrationNeedle: number
}

const CalibrationDisplay = (props: Props) => {
  return (
        <div className="w-full mx-auto md:w-2/3 flex flex-row items-end justify-between gap-4 px-8 md:px-10 lg:px-16 relative">

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

        <div className={`w-[1px] h-32 md:h-40 bg-red-600 rounded-full absolute bottom-0 z-20 left-[${props.calibrationNeedle ? props.calibrationNeedle : 0}px]`}></div>


    </div>  
  )
}

export default CalibrationDisplay