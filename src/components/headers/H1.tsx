import { ReactElement } from "react"

type Props = {
    additionalClasses:string | undefined,
    headerText:string,
    textIcon : undefined | ReactElement
}

const H1 = (props: Props) => {
  return (
    <h1 className={` text-3xl md:text-4xl lg:text-5xl font-bold capitalize text-zinc-800 font-main ${props.additionalClasses}`}>  {props.headerText} {props.textIcon}</h1>
)
}

export default H1