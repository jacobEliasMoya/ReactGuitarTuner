import H1 from '../headers/H1'
import MainButton from '../buttons/MainButton'
import { PiGuitarLight } from 'react-icons/pi'

type Props = {
    additionalClasses:string | undefined,
    onclick: (event:React.MouseEvent<HTMLButtonElement>)=>void,
  }

const AppStart = (props:Props) => {
  
  return (
    <div className={`will-change-transform md:w-96 w-64 h-64 md:h-96 bg-white flex flex-col items-center justify-center  [border-radius:15%_90%_62%_41%_/_15%_41%_62%_90%] [box-shadow:_-15em_-15em_1em_-5em_#00000026] fixed -rotate-[135deg] hover:scale-90 top-1/3 -mt-14 ${props.additionalClasses}`}>

      <div className='will-change-transform rotate-[135deg] text-center flex flex-col gap-4 -translate-x-3 -translate-y-3'>
        <H1 headerText={"Get Ready"} additionalClasses={'font-secondary md:mb-2 '} textIcon={undefined}/>
        <MainButton buttonText="Let's Tune" textIcon={ <PiGuitarLight/>} additionalClasses={'flex gap-2 items-center justify-center'} onclick={props.onclick}/> 
      </div>
    </div>  
  )
}

export default AppStart