import H1 from '../headers/H1'
import MainButton from '../buttons/MainButton'

type Props = {
    additionalClasses:string | undefined,
      onclick: (event:React.MouseEvent<HTMLButtonElement>)=>void,
  }

const AppStart = (props:Props) => {

  return (
    <div className=" md:w-96 w-64 h-64 md:h-96 bg-white rotate-45 flex flex-col items-center justify-center  transition-all ease [border-radius:15%_90%_62%_41%_/_15%_41%_62%_90%] ">
      <div className=' -rotate-45 text-center flex flex-col gap-4 '>
          <H1 headerText={"Get Ready"} additionalClasses={'font-secodnary'} textIcon={undefined}/>
          <MainButton buttonText="Let's Tune" textIcon={undefined} additionalClasses={''} onclick={props.onclick}/> 
      </div>
    </div>  
  )
}

export default AppStart