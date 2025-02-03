import { ReactElement } from 'react'

type Props = {
    buttonText:string,
    additionalClasses: string | undefined,
    textIcon : undefined | ReactElement
}

const AltButton = (props: Props) => {
    return (
        <button className="min-w-10 rounded-lg text-lg md:text-2xl p-3 md:p-3 md:px-8  text-white  font-main  bg-lime-800 hover:bg-lime-900  "  > {props.buttonText} {props.textIcon}</button>
    )
}

export default AltButton