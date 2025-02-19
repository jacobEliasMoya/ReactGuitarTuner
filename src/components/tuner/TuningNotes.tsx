import React from 'react'

type Props = {
    notes:string[] | null 
}

const TuningNotes = (props: Props) => {
  return (
    <>
        {props.notes?.map((note)=>(
            <div className="w-7 h-7 md:w-16 md:h-16 bg-zinc-500 border-2 border-zinc-600 hover:border-white cursor-pointer rounded-full flex items-center justify-center">{note}</div>
        ))}
    </>
  )
}

export default TuningNotes