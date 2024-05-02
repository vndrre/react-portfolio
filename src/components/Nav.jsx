import { useState } from "react"


export default function Nav(){   
    let Links =[
        {name:"// Home",link:"/home"},
        {name:"// Projects",link:"#projets"},
        {name:"// Contact",link:"/"},
      ];
    
    let [open,setOpen]=useState(false);

    return (
        <nav className="text-[#f7e7cd] w-full fixed top-0 left-0">
            <div className="md:flex md:justify-center md:py-7 bg-[#1a1a1a] py-4 md:px-10 px-5">
                <div className="font-bold text-2xl cursor-pointer flex justify-between items-center md:hidden"> 
                    <h1>vndre</h1>
                </div>
                
                <div className="text-3xl absolute right-8 top-5 cursor-pointer md:hidden" onClick={()=>setOpen(!open)}>
                    <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:text-2xl text-xl md:gap-10 md:items-center md:pb-0 pb-5 pt-5 md:pt-0 absolute md:static bg-[#1a1a1a] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 
                transition-all duration-500 ease-in ${open ? 'top-10':'top-[-490px]'}`}>
                    {
                        Links.map((link)=>(
                            <li key={link.name} className="md:opacity-85 md:hover:opacity-100 duration-500 md:my-0 my-7">
                                <a href={link.link}>{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}