import '../App.css';
import React from 'react';
function Thoughts() {
  return (

    <div className='grid grid-row-2'>
    <div className=' grid grid-cols-2 gap-1  text-6xl font-black font-extralight font-sans pt-20 pb-20 pl-20'>
      <div className=' h-[55vh] flex flex-row flex-nowrap '>
      <p className = "Actonia text-5xl mb-auto"> our </p> HAPPY COUPLES<p></p><p className = "Actonia text-5xl mb-auto"> and </p> THEIR THOUGHTS
      </div>                          
      <div className="text-5xl  ">
        <img src = "src/assets/images/thought.svg" alt="Hello"/>
      </div>
    </div>
    <div className='h-[15vh] mt-20 flex flex-row justify-center items-center text-3xl  font-bold font-sans  bg-cover  gap-5'>
    <p className = "Actonia text-5xl " >OUR </p> AWARDS<p className = "Actonia text-5xl">& </p> FEATURES
    </div>
    <div className = 'flex flex-row justify-center items-center gap-10  pb-20  '>
      <div>
        <img src = "src/assets/images/fearless.svg" alt="Award1"/>
      </div>
      <div>
        <img src = "src/assets/images/top100.svg" alt="Award2"/>
        </div>
        <div>
        <img src = "src/assets/images/mywed.svg" alt="Award3"/>
        </div>
    </div>
   
    </div>
    
    
  );
}
export default Thoughts;
