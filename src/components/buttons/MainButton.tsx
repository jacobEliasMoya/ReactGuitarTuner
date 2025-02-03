import { ReactElement } from 'react'

type Props = {
    buttonText:string,
    additionalClasses: string | undefined,
    textIcon : undefined | ReactElement
}

const MainButton = (props: Props) => {
  return (
    <button className="min-w-10 rounded-lg text-lg md:text-2xl p-3 md:p-3 font-main hover:bg-lime-500 md:px-8  text-lime-800 bg-lime-400 "  > {props.buttonText} {props.textIcon}</button>
  )
}

export default MainButton