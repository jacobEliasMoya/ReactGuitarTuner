import { GuitarSixStandard } from "../../types/guitarSixStandard"
import H2 from "../headers/H2"

type Props = {
    notes:GuitarSixStandard[] | null 
}

const TuningNotes = (props: Props) => {
  return (
    <div className="bg-opacity-70 bg-zinc-800 w-full !overflow-hidden text-xs md:text-md lg:text-xl font-secondary flex fixed bottom-0 border-t-2  border-zinc-900 p-2 md:p-4">
        {props.notes?.map((note,index)=>(
            <div key={`note ${index}`} className="w-full h-full hover:bg-zinc-600 group cursor-pointer flex items-center justify-center p-3 ">
                <H2 additionalClasses={"!font-secondary !text-white"} headerText={note.note} textIcon={undefined}/>
            </div>
        ))}
    </div>
  )
}

export default TuningNotes