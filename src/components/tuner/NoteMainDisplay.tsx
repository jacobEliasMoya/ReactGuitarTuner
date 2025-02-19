import H3 from "../headers/H3"
import Paragraph from "../paragraph/Paragraph"

type Props = {
    note: string,
    supportiveText:string,
    hurtz:number
}

const NoteMainDisplay = (props: Props) => {
  return (
    <>
        <div className="w-36 h-36 md:w-52 md:h-52  bg-zinc-800 rounded-full flex items-center justify-center border-2 md:border-4 border-emerald-600">
            <H3 additionalClasses={"!text-3xl md:!text-5xl text-emerald-500 !font-secondary !font-medium"} headerText={props.note} textIcon={undefined} />
        </div>

        <H3 additionalClasses={'!font-medium !font-secondary'} headerText={props.supportiveText} textIcon={undefined}/>
        <Paragraph additionalClasses={"!text-red-500"} paragraphText={`${props.hurtz} Hz`} />   
    </>
  )
}

export default NoteMainDisplay