import React from 'react'

const Button = ({children}) => {
  return (
    <div>
        <button className='bg-[#141414] text-[#f7e7cd] hover:bg-[#f7e7cd] hover:text-[#141414] duration-500 py-2 px-5 m-5 rounded-full border'>
            {children}
        </button>
    </div>
  )
}

export default Button