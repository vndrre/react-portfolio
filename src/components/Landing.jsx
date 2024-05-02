import swingimage from "../assets/pfp-web.png"
import { TypeAnimation } from "react-type-animation"

export default function Landing(){
    return (
        <div className="md:mt-28 md:items-center md:mx-auto md:pl-64 grid grid-cols-1 sm:grid-cols-3 gap-10 mx-auto py-8 bg-[#141414] text-[#f7e7cd] font-main"> 
            <div className="w-[300px] h-auto md:w-[400px] my-auto mx-auto col-span-1">
                <img src={swingimage} alt=""/>
            </div>

            <div className="col-span-2 px-5">
                <div className="md:text-7xl text-5xl font-bold">
                    
                    <span>vndre</span> <br/>
                    <p className="text-3xl md:text-5xl hidden">Web Developer</p>
                    <div className="text-3xl md:text-5xl font-medium">
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
                    
                    <p className="text-lg md:text-xl my-6 md:w-64 font-light">My name is Andre Leppik,<br/> I am an upcoming <br/> <span className="font-semibold">web developer</span></p>
                </div>
            </div>
        </div>
    )
}