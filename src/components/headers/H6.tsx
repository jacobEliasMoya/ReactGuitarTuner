import { ReactElement } from "react"

type Props = {
    additionalClasses:string | undefined,
    headerText:string,
    textIcon : undefined | ReactElement
}

const H6 = (props: Props) => {
  return (
    <h6 className={` text-2xl sm:text-xl md:text-3xl lg:text-4xl font-bold text-zinc-800 capitalize font-main ${props.additionalClasses}`}>  {props.headerText} {props.textIcon}</h6>
)
}

export default H6