import { useEffect, useState } from "react"
import H2 from "../headers/H2"
import H3 from "../headers/H3"
import H4 from "../headers/H4"
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


interface WhatsTuningProps {
  key:number,
  image:string,
  title:string,
  description:string
}

const WhatsTuning = () => {

  const [tuningSelection, setTuningSelection] = useState<WhatsTuningProps[]>()

  useEffect(() => {
    setTuningSelection(
    [ {
      key: 1,
      image: guitar6,
      title: 'Guitar',
      description: '6-string'
    },
    {
      key: 2,
      image: guitar7,
      title: 'Guitar',
      description: '7-string'
    },
    {
      key: 3,
      image: guitar12,
      title: 'Guitar',
      description: '12-string'
    },
    {
      key: 4,
      image: ukulele,
      title: 'Ukulele',
      description: ''
    },
    {
      key: 5,
      image: bass4,
      title: 'Bass',
      description: '4-string'
    },
    {
      key: 6,
      image: bass5,
      title: 'Bass',
      description: '5-string'
    },
    {
      key: 7,
      image: violin,
      title: 'Vionlin/ Fiddle',
      description: ''
    },
    {
      key: 8,
      image: cello,
      title: 'Cello',
      description: ''
    },
    {
      key: 9,
      image: viola,
      title: 'Viola',
      description: ''
    },
    {
      key: 10,
      image: cavaquinho,
      title: 'Cavaquinho',
      description: ''
    },
    {
      key: 11,
      image: mandolin,
      title: 'Mandolin',
      description: ''
    },
    {
      key: 12,
      image: balalaika,
      title: 'Balalaika',
      description: ''
    },
    {
      key: 13,
      image: banjo4,
      title: 'Banjo',
      description: '4-string'
    },
    {
      key: 14,
      image: banjo5,
      title: 'Banjo',
      description: '5-string'
    },
  
  ])
  },[])    

  return (
    <section className='w-full text-white p-8 md:p-16 text-center'>
        <H2 additionalClasses={'!text-white'} headerText={`What are you `} textIcon={undefined}/>
        <H3 additionalClasses={'!text-emerald-500'} headerText={` tuning today`} textIcon={undefined}/>

        <div className="w-full mx-auto md: md:w-11/12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-8 ">
          {tuningSelection?.map((item)=>(
          <div key={item.key} className="cursor-pointer w-full col bg-zinc-900 rounded-xl py-8 px-4 flex items-center justify-start flex-col gap-2 md:gap-3   transition-all border-2 bg-opacity-50 border-zinc-900 hover:border-emerald-400  active:border-emerald-300 after:absolute after:w-full after:h-full after:bg-white after:bg-opacity-0 after:backdrop-blur-sm relative after:-z-[2] z-0 overflow-hidden">
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