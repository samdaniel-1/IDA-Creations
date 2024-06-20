import Clients from "./Pages/clients";
import Footer from "./Pages/footer";
import Home from "./Pages/home";
import Navi from "./Pages/nav";
import Projects from "./Pages/projects";
import Services from "./Pages/services";

function Single(){
    return(
        <>
        <Navi/>
        <Home/>
        <Services/>
        <Projects/>
        <Clients/>
        <Footer/>
        </>
    )
}

export default Single