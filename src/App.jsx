import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
    <div className="w-screen min-h-screen overflow-x-hidden">
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
