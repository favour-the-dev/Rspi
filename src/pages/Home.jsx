import Navbar from "../components/Navbar";
import Hero from "../components/hompage/hero";
import Featuredfood from "../components/featured";
function Home() {
    return ( 
        <>
            <div className="">
                <Navbar/>
                <Hero/>
                <Featuredfood/>
            </div>
        </>
     );
}

export default Home;