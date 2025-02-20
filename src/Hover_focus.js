import React from 'react';
import { useEffect, useRef } from 'react';

function Hover_focus() {


  const footballref = useRef(null);
  const basketballref = useRef(null);
  const ballref = useRef(null);

  const bounceEffect = () => {

    if(footballref.current){
      footballref.current.classList.add("animate-bounceHigher");
      basketballref.current.classList.add("animate-bounceHigher");
      ballref.current.classList.add("animate-bounceHigher");
    }
  };

  // useEffect(() => {

  //    const timeout =  setTimeout(() => {
  //         bounceEffect();
  //     }, 1000);
  //       return ()=> clearTimeout(timeout);    //cleanup timeout to avoid memory leaks
  // }, []);
  
  


  return (
    <>
    <div>

            

            <div className='flex justify-center items-center'>

                <button className='font-bold text-white text-3xl bg-indigo-400 hover:bg-indigo-500 mt-40 rounded-full h-20 w-48 hover:rounded-lg 
                hover:border-4 border-black active:bg-indigo-700 active:text-white focus:ring-4 focus:ring-yellow-400
                sm:hover:bg-indigo-500 lg:hover:bg-green-400  '> Click me </button>

            </div>


        {/* ============================= APPLYING DIRECTIVE IN TAILWIND CSS : ================================ */}


            <div>

                <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4  focus:ring-green-300 
                font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button>
                <button className='btn'> Button </button>

                <p className='mytext'> this is my styled text </p>
            </div>

            <div className='flex justify-center items-center'>

              <button className='btn2 h-20 w-44 font-bold text-3xl ml-28'onClick={bounceEffect}> Bounce </button>

            </div>


      
    </div>

    <div className="flex justify-center items-center h-80">
    <p ref={footballref} className= 'football h-10 ml-20 w-20 mt-40 text-[100px]' > ⚽ </p>
    <p ref={basketballref} className='basketball h-10 w-20 mt-[275px] ml-20  text-[75px] '> 🏀 </p>
    <p ref={ballref} className='ball h-10 w-20 ml-10 mt-[370px] text-[50px]'> ⚾ </p>
   
    </div> 
    <div className='flex justify-center items-center'>  
    <p className='text-[120px] mr-36 mb-20'>  🤷‍♂️ </p>
    </div>
    
    <div className='flex justify-center items-center'>  
    <p className='text-[100px] ml-40 -mt-[310px]'> 🙋 </p>
    </div>

    <div className='flex justify-center items-center'>  
    <p className='text-[90px] ml-[400px] -mt-72'> 🙋‍♂️ </p>
    </div>

    <div className='mt-20 mb-20 flex justify-center items-center'>
        <p className='font-bold text-10xl text-purple-500 xsm:text-green-500
         sm:text-yellow-400 md:text-orange-400 lg:text-sky-400'> Hello there </p>

    </div>
</>
  )
}

export default Hover_focus;