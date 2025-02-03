import { ReactElement } from 'react'

type Props = {
    buttonText:string,
    additionalClasses: string | undefined,
    textIcon : undefined | ReactElement,
    onclick: (event:React.MouseEvent<HTMLButtonElement>)=>void,
}

const MainButton = (props: Props) => {
  return (
    <button className="active:scale-95 min-w-10 rounded-lg text-lg md:text-2xl p-3 md:p-3 font-main hover:bg-lime-500 md:px-8  text-lime-800 bg-lime-400 "  onClick={props.onclick}> {props.buttonText} {props.textIcon}</button>
  )
}

export default MainButton