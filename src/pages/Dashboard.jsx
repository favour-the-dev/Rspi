import auth from "../firebase";
import logo from '../assets/respi logo.jpg';
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
function Dashboard() {
    const [user, setUser] = useState({});
    const naviagte = useNavigate()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
          setUser(currentUser);
        });
    
        return () => {
          unsubscribe();
        };
      }, []);

    const signout = ()=>{
        signOut(auth)
        naviagte('/')
    }
    return ( 
        <>
            <div className="w-full h-full flex">
              <div className="flex flex-col md:w-[30%] lg:w-[20%] rounded-r-2xl bg-[#E57C23] text-white h-[100vh] relative">
                  <div className="w-[50%] mx-auto text-center flex flex-col">
                    <div className="w-10 h-10 border-4 border-[#E57C23] font-bold rounded-full mx-auto text-center"><img src={logo} alt="logo" className="w-full h-full rounded-full"/></div>
                    <div className="font-bold tracking-tight">RESPI</div>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1">
                    <div className="bg-gray-300 w-10 h-10 rounded-full"></div>
                    <div className="flex flex-col font-bold">Hello, <div className="font-semibold">{user.email}</div></div>
                  </div>
                  <div className="flex flex-col mt-4">
                    <NavLink className='p-2 hover:bg-white hover:text-[#E57C23] duration-150 ease-linear rounded-r-md'>Home</NavLink>
                    <NavLink className='p-2 hover:bg-white hover:text-[#E57C23] duration-150 ease-linear rounded-r-md'>Search Recipe</NavLink>
                    <NavLink className='p-2 hover:bg-white hover:text-[#E57C23] duration-150 ease-linear rounded-r-md'>Meal Planner</NavLink>
                    <NavLink className='p-2 hover:bg-white hover:text-[#E57C23] duration-150 ease-linear rounded-r-md'>Saved Recipe</NavLink>
                  </div>
                  <div className="absolute bottom-0 left-0 ">
                      <button className="p-2 uppercase font-bold  bg-white text-[#E57c23] rounded-r-md" onClick={signout}>Signout</button>
                  </div>
              </div>
                
            </div>
        </>
     );
}

export default Dashboard;