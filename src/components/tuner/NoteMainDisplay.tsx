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
        <div className="w-36 h-36 md:w-52 md:h-52  bg-white rounded-full flex items-center justify-center relative after:absolute after:w-full after:h-full z-[1] after:[background-image:_linear-gradient(45deg,rgba(0,0,0,.75)_35%,rgba(0,0,0,.45)_50%,rgba(0,0,0,.65)_65%)] after:opacity-85 after:left-0 after:top-0 after:transition-all [box-shadow:_inset_0_.25em_1em_black] after:rounded-full">
            <H3 additionalClasses={"z-10 !text-4xl md:!text-5xl text-zinc-800 !font-secondary !font-bold"} headerText={props.note} textIcon={undefined} />
        </div>

        <H3 additionalClasses={'!font-medium !font-secondary'} headerText={props.supportiveText} textIcon={undefined}/>
        <Paragraph additionalClasses={"!text-red-500"} paragraphText={`${props.hurtz} Hz`} />   
    </>
  )
}

export default NoteMainDisplay