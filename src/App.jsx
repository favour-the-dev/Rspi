import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import bg from '../src/assets/bgmain.jpg';
function App() {
  return (
    <>
    <div className="w-screen min-h-screen overflow-x-hidden">
    <img src={bg} alt="" className="w-[100%] h-full absolute top-0 left-0 z-[-1] opacity-90"/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
