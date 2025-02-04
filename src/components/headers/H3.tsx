import { ReactElement } from "react"

type Props = {
    additionalClasses:string | undefined,
    headerText:string,
    textIcon : undefined | ReactElement
}

const H3 = (props: Props) => {
  return (
    <h3 className={` text-2xl sm:text-xl md:text-3xl lg:text-4xl font-bold text-zinc-800 font-main ${props.additionalClasses}`}>  {props.headerText} {props.textIcon}</h3>
)
}

export default H3