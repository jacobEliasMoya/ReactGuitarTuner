import { useEffect, useState } from "react"
import H2 from "../headers/H2"

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
      image: '',
      title: 'Guitar',
      description: '6-string'
    },
    {
      key: 2,
      image: '',
      title: 'Guitar',
      description: '7-string'
    },
    {
      key: 3,
      image: '',
      title: 'Guitar',
      description: '12-string'
    },
    {
      key: 4,
      image: '',
      title: 'Ukulele',
      description: ''
    },
    {
      key: 5,
      image: '',
      title: 'Bass',
      description: '4-string'
    },
    {
      key: 6,
      image: '',
      title: 'Bass',
      description: '5-string'
    },
    {
      key: 7,
      image: '',
      title: 'Vionlin/Fiddle',
      description: ''
    },
    {
      key: 8,
      image: '',
      title: 'Cello',
      description: ''
    },
    {
      key: 9,
      image: '',
      title: 'Viola',
      description: ''
    },
    {
      key: 10,
      image: '',
      title: 'Cavaquinho',
      description: ''
    },
    {
      key: 11,
      image: '',
      title: 'Manodlin',
      description: ''
    },
    {
      key: 12,
      image: '',
      title: 'Balalaika',
      description: ''
    },
    {
      key: 13,
      image: '',
      title: 'Banjo',
      description: '4-string'
    },
    {
      key: 14,
      image: '',
      title: 'Banjo',
      description: '5-string'
    },
  
  ])
  },[])    

  return (
    <section className='w-2/3 text-white py-8 px-4 text-center'>
      <H2 additionalClasses={'!text-white'} headerText={`What are you tuning today`} textIcon={undefined}/>


        {tuningSelection?.map((item)=>(
          <div key={item.key} className="w-full grid grid-cols-6-col">

            <div className="">item.image</div>
            <div className="">{item.title}</div>
            <div className="">{item.description}</div>

          </div>        
        ))}



    </section>
  ) 
}

export default WhatsTuning