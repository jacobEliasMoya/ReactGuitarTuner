import { useEffect, useState } from "react"
import H2 from "../../components/headers/H2"
import H3 from "../../components/headers/H3"
import H4 from "../../components/headers/H4"
import guitar6 from '../../assets/guitar.webp'
import guitar7 from '../../assets/7-string.webp'
import guitar12 from '../../assets/12-string.webp'
import ukulele from '../../assets/ukulele.webp'
import bass4 from '../../assets/bass4.webp'
import bass5 from '../../assets/bass5.webp'
import violin from '../../assets/violin.webp'
import cello from '../../assets/cello.webp'
import viola from '../../assets/viola.webp'
import cavaquinho from '../../assets/cavaquino.webp'
import mandolin from '../../assets/mandolin.webp'
import balalaika from '../../assets/balalaika.webp' 
import banjo4 from '../../assets/banjo4.webp' 
import banjo5 from '../../assets/banjo5.webp' 
import H1 from "../../components/headers/H1"
import Paragraph from "../../components/paragraph/Paragraph"


interface WhatsTuningProps {
  key:number,
  image:string,
  title:string,
  description:string,
  id:string
}

const WhatsTuning = () => {

  const [tuningSelection, setTuningSelection] = useState<WhatsTuningProps[]>()
  const [selectedInstrument,setSelectedInstrument] = useState<WhatsTuningProps>()

  const handleClick = (item:WhatsTuningProps) => {
    item.id ? setSelectedInstrument(item) : null;
  }

  useEffect(() => {
    setTuningSelection(
    [ 
      {
      key: 1,
      image: guitar6,
      title: 'Guitar',
      description: '6-string',
      id: "six-string"
    },
    {
      key: 2,
      image: guitar7,
      title: 'Guitar',
      description: '7-string',
      id: "seven-string"
    },
    {
      key: 3,
      image: guitar12,
      title: 'Guitar',
      description: '12-string',
      id: "twelve-string"
    },
    {
      key: 4,
      image: ukulele,
      title: 'Ukulele',
      description: '',
      id: "ukulele"
    },
    {
      key: 5,
      image: bass4,
      title: 'Bass',
      description: '4-string',
      id: "four-string-bass"
    },
    {
      key: 6,
      image: bass5,
      title: 'Bass',
      description: '5-string',
      id: "five-string-bass"
    },
    {
      key: 7,
      image: violin,
      title: 'Vionlin/ Fiddle',
      description: '',
      id: "violin"
    },
    {
      key: 8,
      image: cello,
      title: 'Cello',
      description: '',
      id: "cello"
    },
    {
      key: 9,
      image: viola,
      title: 'Viola',
      description: '',
      id: "viola"
    },
    {
      key: 10,
      image: cavaquinho,
      title: 'Cavaquinho',
      description: '',
      id: "cavaquinho"
    },
    {
      key: 11,
      image: mandolin,
      title: 'Mandolin',
      description: '',
      id: "mandolin"
    },
    {
      key: 12,
      image: balalaika,
      title: 'Balalaika',
      description: '',
      id: "balalaika"
    },
    {
      key: 13,
      image: banjo4,
      title: 'Banjo',
      description: '4-string',
      id: "four-string-banjo"
    },
    {
      key: 14,
      image: banjo5,
      title: 'Banjo',
      description: '5-string',
      id: "five-string-banjo"
    },
  
  ])
  },[])  
  
  // useEffect(()=>{
  //   console.log(selectedInstrument)
  // },[selectedInstrument])

  return (
    <section className='w-full text-white pb-8 md:pb-10 lg:pb-16 pt-0 text-center'>
        <div className="w-full sticky top-0 py-4 md:py-10 lg:py-16 z-10 bg-zinc-900 border-b-[1px] border-zinc-800 after:absolute after:w-full after:h-full after:bg-white after:bg-opacity-0 after:backdrop-blur-md  after:-z-[2] bg-opacity-80 overflow-hidden after:left-0 after:top-0">
          <H1 additionalClasses={'!text-white'} headerText={`What are you `} textIcon={undefined}/>
          <H2 additionalClasses={'!text-emerald-500'} headerText={` tuning today`} textIcon={undefined}/>
          {selectedInstrument ? 
        <Paragraph additionalClasses={undefined} paragraphText={`// You have selected ${selectedInstrument.title}`} /> : 
        <Paragraph additionalClasses={undefined} paragraphText={"// select an instrument"} />}
        </div>
       
        <div className="w-full mx-auto md: md:w-11/12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-8 px-8 md:px-10 lg:px-16">
        
          {tuningSelection?.map((item)=>(
          <div onClick={()=>{handleClick(item)}} id={item.id} key={item.key} className="cursor-pointer w-full col bg-zinc-900 rounded-xl py-8 px-4 flex items-center justify-start flex-col gap-2 md:gap-3   transition-all border-2 bg-opacity-50 border-zinc-900 hover:border-emerald-400  active:border-emerald-300 after:absolute after:w-full after:h-full after:bg-white after:bg-opacity-0 after:backdrop-blur-sm relative after:-z-[2] z-0 overflow-hidden">
              <div className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40  rounded-full bg-cover bg-center mb-3 "
                style={{
                  backgroundImage:`url(${item.image})`
                }}
              ></div>
              <div className=""><H3 additionalClasses={'!text-white'} headerText={item.title} textIcon={undefined}/></div>
              <div className=""><H4 additionalClasses={'!text-emerald-500'} headerText={item.description} textIcon={undefined}/></div>
            </div>        
          ))}
        </div>

    </section>
  ) 
}

export default WhatsTuning