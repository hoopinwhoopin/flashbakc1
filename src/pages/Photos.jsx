

function Photos() {

    return (
<div className='bg-black bg-fixed'>

<div className='h-[70vh]  grid grid-cols-2 gap-1  text-white text-6xl font-extralight font-sans pt-[13vh] pb-20 pl-20'>
  <div className=' h-[60vh] flex flex-row-reverse flex-nowrap'>
  <img src = "src/assets/images/photosheader.svg" alt="hello"/>
  </div>
  <div className="text-5xl flex-col flex gap-10 pl-10 pt-[10vh]">
    <strong>  
    <p>Behind<p></p><div className=" flex-row flex gap-2"> <p className = "Actonia text-5xl mb-auto" >the</p> <p> brand</p></div></p>
    <div className="text-2xl flex-col flex gap-10 pt-5">
      <div className="Courier">
        <h1>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,<p></p> sed do eiusmod tempor incididunt ut labore et dolore magna <p></p> aliqua. Justo laoreet sit amet cursus.Consequat interdum <p></p> varius sit amet mattis vulputate enim nulla aliquet.<p></p>
    </h1> </div>
    <div className="Courier">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,<p></p> sed do eiusmod tempor incididunt ut labore et dolore magna <p></p> aliqua. Justo laoreet sit amet cursus.Consequat interdum <p></p> varius sit amet mattis vulputate enim nulla aliquet.<p></p>
    </div>
    </div>
    </strong>
  </div>
</div>
    <div className='h-[80vh] mt-20 bg-newCollection flex flex-col justify-center items-center text-4xl font-light  bg-cover text-white font-sans '>
   </div>
    <div>
     
    </div>
</div>

    );
  }
  export default Photos;