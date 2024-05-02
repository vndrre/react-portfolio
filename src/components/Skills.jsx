import React from 'react'

import css from '../assets/prg languages logos/CSS.png'
import html from '../assets/prg languages logos/HTML.png'
import tailwind from '../assets/prg languages logos/tailwind.png'
import react from '../assets/prg languages logos/React.webp'

const Skills = () => {
  return (
    <div className='md:flex-col text-center md:justify-center md:p-10 pt-20 pb-20 md:mt-20 bg-[#141414] text-[#f7e7cd]'>
      <h1 className='text-4xl font-semibold pt-5 pb-10 md:pb-0'>My Skills</h1>
      
      <div className='grid grid-cols-2 md:grid-cols-4 items-center md:pt-20 scale-75 md:hidden'>
        <div className='flex-col items-center scale-75 md:scale-100'>
            <div className='md:w-[150px] md:h-auto'>
              <img src={html} alt="" />
            </div>

            <div className='md:hidden'>
              <p className='text-3xl font-medium mt-5'>HTML</p>
            </div>
        </div>
        
        <div className='flex-col items-center scale-75 md:scale-100'>
            <div className='md:w-[150px] md:h-auto'>
              <img src={css} alt="" />
            </div>

            <div className='md:hidden'>
              <p className='text-3xl font-medium mt-5'>CSS</p>
            </div>
        </div>

        <div className='flex-col items-center scale-75 md:scale-100'>
            <div className='md:w-[150px] md:h-auto'>
              <img src={tailwind} alt="" />
            </div>

            <div className='md:hidden'>
              <p className='text-3xl font-medium mt-5'>Tailwind CSS</p>
            </div>
        </div>

        <div className='flex-col items-center scale-75 md:scale-100'>
            <div className='md:w-[150px] md:h-auto'>
              <img src={react} alt="" />
            </div>

            <div className='md:hidden'>
              <p className='text-3xl font-medium mt-5'>React JS</p>
            </div>
        </div>
      </div>


      <div className='hidden md:flex md:gap-20 md:justify-center md:mt-20'>
        <div className='md:w-[150px] md:h-auto'>
          <img src={html} alt="" />
          <p className='mt-3 text-2xl'>HTML</p>
        </div>

        <div className='md:w-[150px] md:h-auto'>
          <img src={css} alt="" />
          <p className='mt-3 text-2xl'>CSS</p>
        </div>

        <div className='md:w-[150px] md:h-auto'>
          <img src={tailwind} alt="" />
          <p className='mt-3 text-2xl'>Tailwind CSS</p>
        </div>

        <div className='md:w-[150px] md:h-auto'>
          <img src={react} alt="" />
          <p className='mt-3 text-2xl'>React JS</p>
        </div>
      </div>

    </div>
  )
}

export default Skills