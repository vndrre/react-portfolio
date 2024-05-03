import React from 'react'



const Contact = () => {
  return (
      <div className='bg-[#141414] text-[#f7e7cd] pt-20 md:pt-36 pb-5 px-10 font-space' id='contact'>
        <h1 className='text-4xl md:text-6xl font-semibold pt-10 md:pb-0 text-center'><span>/</span>/ Contact</h1>
        
        <h1 className='text-center md:text-3xl text-xl pt-10 font-semibold'>Available for<br className='md:hidden'/> freelance opportunities</h1>
        <p className='text-center pt-3'>Have an exciting project you need help with? <br/>
        Send me an email or contact me via instant message!</p>

        <div className='flex justify-center'>
          <a href="mailto:andre.lepik@ametikool.ee" className='hover:bg-[#f7e7cd] hover:text-[#141414] text-[#f7e7cd] duration-500 text-2xl rounded-lg text-center mt-5 items-center py-2 px-5'>andre.lepik@ametikool.ee</a>
        </div>

        <div className='text-center mt-6 grid grid-cols-1 gap-5'>
          <a href="https://www.github.com/vndrre" className='opacity-75 hover:opacity-100 duration-500 font-medium'>Github</a>
          <a href="https://www.linkedin.com/" className='opacity-75 hover:opacity-100 duration-500 font-medium'>LinkedIn</a>
          <a href="https://www.instagram.com/" className='opacity-75 hover:opacity-100 duration-500 font-medium'>Instagram</a>
        </div>
        
        <a href="#start" className='text-center bg-[#141414] text-[#f7e7cd] hover:bg-[#f7e7cd] hover:text-[#141414] border px-3 py-1 md:px-6 md:py-3 rounded-full absolute right-5 md:hidden'>↑</a>

        <a href="#start" className='md:block hidden text-5xl absolute right-16 bg-[#141414] text-[#f7e7cd] hover:bg-[#f7e7cd] hover:text-[#141414] border duration-500 rounded-full px-4 p-2'>↑</a>

        <p className='text-center md:mt-36 mt-14'>Developed by vndre</p>
      </div>
  )
}

export default Contact