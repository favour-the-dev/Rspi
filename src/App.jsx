import { Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Forgot from "./pages/Forgotpassword";
import { Contextprovider } from "./components/context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashhome from "./pages/Dashhome";
import Dashsearch from "./pages/DashSearch";
import Dashmeal from "./pages/Dashmeal";
import DashSaved from "./pages/DashSaved";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
    <div className="w-screen min-h-screen overflow-x-hidden">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Contextprovider>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
          <Route path ="/dash" element={<Dashboard/>}>
            {/* <Route index element={<Dashhome/>}/> */}
            <Route path="home" element={<Dashhome/>}/>
            <Route path='search' element={<Dashsearch/>}/>
            <Route path='meal' element={<Dashmeal/>}/>
            <Route path='save' element={<DashSaved/>}/>
          </Route>
          <Route path="/Forgot" element={<Forgot/>}></Route>
        </Routes>
      </Contextprovider>
    </div>
    </>
  )
}

export default App
