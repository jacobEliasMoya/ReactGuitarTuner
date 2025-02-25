import { ReactElement } from 'react'

type Props = {
    buttonText:string,
    additionalClasses: string | undefined,
    textIcon : undefined | ReactElement,
    onclick: ((event:React.MouseEvent<HTMLButtonElement>) => void) | undefined
}

const MainButton = (props: Props) => {
  return (
    <button className={`active:scale-95 min-w-10 rounded-lg text-lg md:text-2xl p-3 md:p-3 font-main hover:bg-red-800 md:px-8  text-white font-bold bg-red-700 ${props.additionalClasses}`}  onClick={props.onclick}> {props.textIcon} {props.buttonText} </button>
  )
}

export default MainButton