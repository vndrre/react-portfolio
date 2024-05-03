import swingimage from "../assets/pfp-web.png"
import scrollanimation from "../assets/scroll-down-mouse.webp"

import { TypeAnimation } from "react-type-animation"

export default function Landing(){
    return (
        <div className="md:mt-28 p-20 py-24  bg-[#141414] text-[#f7e7cd] font-space" id="start"> 
            <div className="md:hidden">
                <img src={swingimage} alt=""/>
            </div>

            <div className=" text-center my-auto">
                <div className="">
                    <h1 className="font-bold text-6xl md:text-8xl">vndre</h1>
                </div>

                <div className="text-xl md:text-5xl">
                    <TypeAnimation 
                        sequence={[
                            "Front-end Developer",
                            1000,
                            "Web Designer",
                            1000,
                        ]}
                        wrapper="span"
                        speed={45}
                        repeat={Infinity}

                    />
                </div>
                
                <div className="mt-5 md:pt-10">
                    <p className="font-light md:text-2xl">Hi I'm Andre Leppik,<br/> an upcoming <span className="font-semibold">Web Developer</span></p>
                </div>
            </div>

            <div className="flex justify-center md:scale-50 opacity-90">
                <img src={scrollanimation} alt="" className="scale-50"/>
            </div>
        </div>
    )
}