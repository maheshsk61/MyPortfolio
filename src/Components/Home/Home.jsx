import Navbar from "../Navbar/Navbar"
import About from "../About/About"
import Skills from "../Skills/Skills"
import Contact from "../Contact/Contact"
import Resume from "../Resume/Resume"
import Github from "../Github/Github"
import Project from "../Projects/Project"
export default function Home() {
    return (
        <div className="row">
            <div className="col-xs-12" id="home">
                <Navbar />
                <About />
                <Skills />
                <Resume />
                <Project />
                <Github />
                <Contact />
            </div>
        </div>
    )
}
