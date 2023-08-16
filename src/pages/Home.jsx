import Navbar from "../components/Navbar";
import Hero from "../components/hompage/hero";
import Featuredfood from "../components/featured";
import bg from '../assets/bgmain.jpg';
function Home() {
    return ( 
        <>
            <div className="min-h-screen flex flex-col justify-between overflow-y-hidden">
                <img src={bg} alt="" className="w-[100%] h-full absolute top-0 left-0 z-[-1] opacity-80"/>
                <Navbar/>
                <Hero/>
                <Featuredfood/>
            </div>
        </>
     );
}

export default Home;