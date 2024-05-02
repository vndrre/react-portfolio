import Nav from "../components/Nav"
import Landing from "../components/Landing"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

export default function Home(){
    return (
        <div className="bg-[#141414] h-screen w-full">
            <Nav/>
            <Landing/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    )
}