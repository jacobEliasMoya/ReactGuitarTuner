import { FaSquareCheck, FaRectangleXmark } from 'react-icons/fa6'
import MainButton from '../buttons/MainButton'
import Paragraph from '../paragraph/Paragraph'

type Props = {
    moduleBool: boolean,
    widgetText: string ,
    confirmClick: ((event:React.MouseEvent<HTMLButtonElement>) => void) | undefined,
    closeClick: ((event:React.MouseEvent<HTMLButtonElement>) => void) | undefined
}

const ConfirmationPopup = (props: Props) => {
  return (
    <div className={`w-full h-full fixed left-0 ${props.moduleBool ? 'opacity-1 top-[0vh]' : 'opacity-0 top-[100vh]'} z-20 flex items-center justify-center bg-black bg-opacity-85 `}>
        <div className=" w-2/3 md:w-96 min-h-10 flex flex-col rounded-lg overflow-hidden bg-zinc-800 ">
            <div className="w-full flex items-center justify-center p-4 font-main text-xl bg-zinc-900">
                <Paragraph additionalClasses={'!text-white'} paragraphText={"Attention: "}/>
            </div>

            <div className="w-full flex flex-col items-center justify-center p-4 py-8">
                <Paragraph additionalClasses={undefined} paragraphText={"You Have selected"}/>
                <Paragraph additionalClasses={'!text-emerald-500'} paragraphText={props.widgetText} />           
            </div>

            <div className="w-full grid grid-cols-2">
                <MainButton buttonText={""} additionalClasses={'!rounded-none flex items-center justify-center'} textIcon={<FaSquareCheck/>} onclick={props.confirmClick}/>   
                <MainButton buttonText={""} additionalClasses={'!bg-red-600 hover:!bg-red-700 !rounded-none flex items-center justify-center'} textIcon={<FaRectangleXmark/>} onclick={props.closeClick}/>            
            </div>
        </div>
    </div>  
  )
}

export default ConfirmationPopup