import React from 'react';

function Border() {

    const hover = () => {
        console.log("you've hovered over me..");
      }
      
      const clk = () => {
        alert("you've clicked me..");
      }

  return (
    <>
    <div className="App flex items-center justify-center">

      <div className='flex flex-col items-center space-y-6 p-6 w-full'>

        <h1 className='bg-red-200 w-1/2 border-black hover:border-b-8 hover:rounded-bl-lg hover:rounded-b-lg text-center'> hello there... </h1>  
        <button className='font-bold text-white rounded mt-24 h-10 w-20 bg-black hover:text-black hover:bg-white border-2 border-black'
        onClick={clk}>
           click me </button>
        </div>
    </div>

    <div className='flex justify-center items-center mt-20'>
        <div className= 'h-60 w-80 flex flex-col' style={{border:"1px solid black"}}>
          <button className='bg-white text-black h-10 w-20 border-t-2 border-black border-l-2
          hover:border-2 hover:border-black hover:font-bold' onClick={()=> console.log("btn1 clicked")}> Button-1 </button>

          <button className='bg-white ml-60  text-black -my-10 h-10 w-20 border-r-2 border-t-2 border-black 
          hover:border-2 hover:font-bold' onClick={()=> console.log("btn2 clicked")}> Button-2 </button>

          <h1 id='header' className='mt-28 text-lg font-bold flex justify-center items-center text-purple-500 hover:text-green-500' onMouseOver={hover}> Hover & click </h1>

          <button className='bg-white text-black mt-14 right-10 h-11 w-20 border-b-2 border-black border-l-2
          hover:border-2 hover:font-bold' onClick={()=> console.log("btn3 clicked")}> Button-3 </button>

          <button className='bg-white ml-60  text-black -my-10 h-10 w-20 border-b-2 border-r-2 border-black 
          hover:border-2 hover:font-bold' onClick={()=> console.log("btn4 clicked")}> Button-4 </button>
          
          </div>
    </div>
    </>
  )
}

export default Border;