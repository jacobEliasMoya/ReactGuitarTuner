type Props = {
  additionalClasses:string | undefined,
  paragraphText:string,
}

const Paragraph = (props: Props) => {
  return (
    <p className={`text-zinc-600 font-bold capitalize ${props.additionalClasses}`}>
        {props.paragraphText}
    </p>
  )
}

export default Paragraph