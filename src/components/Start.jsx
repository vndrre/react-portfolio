import React from 'react'

import Button from './Button'

const Start = () => {
  return (
    <div className='text-[#f7e7cd] pt-36'>
        <h1 className='text-center text-6xl md:text-7xl md:mt-36 mt-16 md:font-semibold'>Welcome to My Portfolio!</h1>

        <a href="#start" className='flex justify-center mt-20'>
            <Button>CLICK HERE</Button>
        </a>
    </div>
  )
}

export default Start