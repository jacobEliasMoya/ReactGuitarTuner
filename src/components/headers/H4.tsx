import { ReactElement } from "react"

type Props = {
    additionalClasses:string | undefined,
    headerText:string,
    textIcon : undefined | ReactElement
}

const H4 = (props: Props) => {
  return (
    <h4 className={` text-md md:text-lg lg:text-xl font-bold leading-none font-main capitalize ${props.additionalClasses}`}>  {props.headerText} {props.textIcon}</h4>
)
}

export default H4