import React from 'react';

function Sq_notation() {
  return (
    <>
    <div className='lg:hidden xl:hidden 2xl:hidden flex justify-center items-center h-[660px] bg-sky-200'>
            <h1 className=' font-bold text-[50px] text-lg mb-40 bg-sky-400 
            sm:bg-green-400 sm:text-3xl
            md:bg-yellow-300 md:text-5xl
            lg:bg-red-400 lg:text-7xl
            xl:bg-purple-400 xl:text-9xl
            2xl:bg-pink-400 2xl:text-[170px]'> Today is a superb day!! </h1>
    </div>

    <div className='hidden lg:flex justify-center items-center h-[660px] bg-sky-200 xl:hidden'>
            <h1 className=' font-bold text-[50px] text-lg mb-40 bg-sky-400 
            lg:bg-red-400 text-white lg:text-7xl'>
                 You're on a large screen.. </h1>
    </div>

    <div className='hidden xl:flex justify-center items-center h-[660px] bg-sky-200 2xl:hidden'>
            <h1 className=' font-bold text-[50px] text-lg mb-40 bg-sky-400 
            xl:bg-purple-400 xl:text-9xl'>
                You're on a extra-large screen.. </h1>
    </div>

    <div className='hidden 2xl:flex justify-center items-center h-[660px] bg-sky-200'>
            <h1 className=' font-bold text-[50px] mb-40 bg-sky-400 
            2xl:bg-pink-400 2xl:text-[170px]'> You're on a extra-extra-large screen.. </h1>
    </div>
</>
  )
}

export default Sq_notation;