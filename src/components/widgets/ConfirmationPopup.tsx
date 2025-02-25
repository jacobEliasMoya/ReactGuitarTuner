import { FaSquareCheck, FaRectangleXmark } from 'react-icons/fa6'
import MainButton from '../buttons/MainButton'
import Paragraph from '../paragraph/Paragraph'

type Props = {
    moduleBool: boolean,
    widgetText: string ,
    confirmationText: string,
    confirmClick: ((event:React.MouseEvent<HTMLButtonElement>) => void) | undefined,
    closeClick: ((event:React.MouseEvent<HTMLButtonElement>) => void) | undefined
}

const ConfirmationPopup = (props: Props) => {
  return (
    <div className={`w-full min-h-dvh fixed left-0 ${props.moduleBool ? 'opacity-1 top-[0vh]' : 'opacity-0 top-[100vh]'} z-20 flex items-center justify-center bg-black bg-opacity-85 `}>
        <div className=" w-2/3 md:w-96 min-h-10 flex flex-col rounded-xl  bg-white ">
            <div className="w-full flex items-center justify-center p-4 font-main text-xl bg-red-500 rounded-t-lg">
                <Paragraph additionalClasses={'!text-white'} paragraphText={"Attention: "}/>
            </div>

            <div className="w-full flex flex-col items-center justify-center p-4 py-8 ">
                <Paragraph additionalClasses={undefined} paragraphText={props.confirmationText}/>
                <Paragraph additionalClasses={'!text-green-500 !font-main'} paragraphText={props.widgetText} />           
            </div>

            <div className="w-full grid grid-cols-2 rounded-b-lg overflow-hidden ">
                <MainButton buttonText={""} additionalClasses={'!bg-green-400 hover:!bg-green-700 active:!bg-green-800 !rounded-none flex items-center justify-center !text-zinc-800 hover:!text-white'} textIcon={<FaSquareCheck/>} onclick={props.confirmClick}/>   
                <MainButton buttonText={""} additionalClasses={'!bg-red-600 hover:!bg-red-700 hover:!bg-red-800 !rounded-none flex items-center justify-center'} textIcon={<FaRectangleXmark/>} onclick={props.closeClick}/>            
            </div>
        </div>
    </div>  
  )
}

export default ConfirmationPopup