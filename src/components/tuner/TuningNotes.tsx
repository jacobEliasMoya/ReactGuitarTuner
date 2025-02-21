import { GuitarSixStandard } from "../../types/guitarSixStandard"
import H2 from "../headers/H2"

type Props = {
    notes:GuitarSixStandard[] | null 
}

const TuningNotes = (props: Props) => {
  return (
    <>
        {props.notes?.map((note,index)=>(
            <div key={`note ${index}`} className="w-full h-full  bg-zinc-500 hover:bg-zinc-600 group cursor-pointer flex items-center justify-center p-3 border-x-[3px] md:border-x-0 first:border-l-0 last:border-r-0 border-zinc-600 ">
                <H2 additionalClasses={"!font-secondary group-hover:!text-white"} headerText={note.note} textIcon={undefined}/>
            </div>
        ))}
    </>
  )
}

export default TuningNotes