import React from 'react'

import Button from './Button'
import aistart from '../assets/projects/ai-start-up.jpg'

const Projects = () => {
  return (
    <div className='bg-[#141414] text-[#f7e7cd] pt-20 pb-20 px-10' id='projects'>
        <h1 className='text-4xl md:text-6xl font-semibold pt-5 pb-10 text-center'>Projects</h1>
        
        <div className='grid grid-cols-1 gap-20 md:gap-10'>
            <div className='flex md:scale-75 md:rounded-xl'>
                <div className='bg-[#0d0d0d] rounded-xl md:flex md:justify-center'>
                    <div className='md:h-auto md:w-[1000px]'>
                        <img src={aistart} alt="" />
                    </div>

                    <div className='text-center p-5 my-auto'>
                        <h1 className='text-xl md:text-4xl'>AI STARTUP TOOL</h1>
                        
                        <div className='mt-3 font-light'>
                            <p className='md:text-2xl '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/> Accusamus molestiae aspernatur dolores hic fugit rem id reprehenderit necessitatibus cupiditate sit,<br/> consequatur impedit fuga, cumque exercitationem odio error quas obcaecati distinctio!</p>
                        </div>
                        <div className='md:scale-150 md:mt-10'>
                            <a href="https://github.com/vndrre/AI-website"><Button>View project</Button></a>
                        </div>

                    </div>
                </div>
            </div>
            
            <div className='flex md:scale-75 md:rounded-xl'>
                <div className='bg-[#0d0d0d] rounded-xl md:flex md:justify-center'>
                    <div className='md:h-auto md:w-[1000px]'>
                        <img src={aistart} alt="" />
                    </div>

                    <div className='text-center p-5 my-auto'>
                        <h1 className='text-xl md:text-4xl'>AI STARTUP TOOL</h1>
                        
                        <div className='mt-3 font-light'>
                            <p className='md:text-2xl '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/> Accusamus molestiae aspernatur dolores hic fugit rem id reprehenderit necessitatibus cupiditate sit,<br/> consequatur impedit fuga, cumque exercitationem odio error quas obcaecati distinctio!</p>
                        </div>
                        <div className='md:scale-150 md:mt-10'>
                            <a href="https://github.com/vndrre/AI-website"><Button>View project</Button></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects