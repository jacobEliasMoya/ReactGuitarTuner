import { ReactElement } from "react"

type Props = {
    additionalClasses:string | undefined,
    headerText:string,
    textIcon : undefined | ReactElement
}

const H2 = (props: Props) => {
  return (
    <h2 className={`capitalize text-xl md:text-3xl lg:text-4xl font-bold text-zinc-800 font-main ${props.additionalClasses}`}>  {props.headerText} {props.textIcon}</h2>
)
}

export default H2