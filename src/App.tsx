function App() {

  return (
    <div className='bg-gradient-to-tr from-gray-950 to-gray-800  min-h-screen flex flex-col items-center justify-center overflow-hidden'>  

      <div className="md:w-96 w-64 h-64 md:h-96 bg-white rounded-[10%] rotate-45 flex flex-col items-center justify-center group hover:rotate-[47deg] transition-all ease ">
      
        <div className='group-hover:-rotate-[47deg] -rotate-45 text-center transition-all ease '>
            <h1 className='text-lg md:text-3xl mb-1 md:mb-4 font-secondary tracking-widest uppercase'> Get Ready </h1>
            <h2 className='text-slate-700 text-2xl md:text-5xl font-main tracking-wider font-bold'>  Get Tuned. </h2>

            <button className="mt-4 md:mt-8 min-w-10 rounded-lg hover:rounded-full text-lg md:text-2xl p-3 md:p-3 md:px-8 font-secondary font-normal bg-blue-950 text-white" >Get Tuning</button>
        </div>

      </div>

     </div>
  )
}

export default App
