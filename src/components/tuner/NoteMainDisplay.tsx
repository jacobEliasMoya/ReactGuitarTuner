import H3 from "../headers/H3"
import Paragraph from "../paragraph/Paragraph"

type Props = {
    note: string | null,
    supportiveText:string,
    hurtz:string
}

const NoteMainDisplay = (props: Props) => {
  return (
    <>
        <div className="w-36 h-36 md:w-52 md:h-52  bg-zinc-800 border-[1px] border-zinc-700 rounded-full flex items-center justify-center relative ">
            <H3 additionalClasses={"z-10 !text-4xl md:!text-5xl !font-secondary !font-bold"} headerText={props.note ? props.note : ''} textIcon={undefined} />
        </div>

        <div className="w-full flex items-center justify-center flex-col gap-1 my-1">
          <H3 additionalClasses={'!font-medium !font-secondary'} headerText={props.supportiveText} textIcon={undefined}/>
          <Paragraph additionalClasses={"!text-green-500"} paragraphText={`${props.hurtz} Hz`} />   
        </div>
    </>
  )
}

export default NoteMainDisplay