import H3 from "../headers/H3"
import Paragraph from "../paragraph/Paragraph"

type Props = {
    note: string | null,
    supportiveText:string,
    hurtz:string,
    almostTuned:boolean,
    inTune:boolean
}

const NoteMainDisplay = (props: Props) => {
  return (
    <>
        <div className={`w-36 h-36 md:w-52 md:h-52 rounded-full flex items-center justify-center relative 
          ${props.almostTuned && !props.inTune ? 'bg-yellow-300' : !props.almostTuned && props.inTune ? 'bg-green-300' : 'bg-zinc-800' } `}>
            <H3 additionalClasses={`z-10 !text-4xl md:!text-5xl !font-secondary !font-bold ${props.almostTuned && !props.inTune ? '!text-yellow-800' : !props.almostTuned && props.inTune ? '!text-green-800' : '!text-zinc-400' }`} headerText={props.note ? props.note : ''} textIcon={undefined} />
        </div>

        <div className="w-full flex items-center justify-center flex-col gap-1 my-1">
          <H3 additionalClasses={'!font-medium !font-secondary'} headerText={props.supportiveText} textIcon={undefined}/>
          <Paragraph additionalClasses={"!text-green-500"} paragraphText={`${props.hurtz} Hz`} />   
        </div>
    </>
  )
}

export default NoteMainDisplay