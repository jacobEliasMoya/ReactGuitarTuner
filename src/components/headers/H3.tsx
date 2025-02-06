import { ReactElement } from "react"

type Props = {
    additionalClasses:string | undefined,
    headerText:string,
    textIcon : undefined | ReactElement
}

const H3 = (props: Props) => {
  return (
    <h3 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-none font-main capitalize ${props.additionalClasses}`}>  {props.headerText} {props.textIcon}</h3>
)
}

export default H3