import auth from "../firebase";
import logo from '../assets/respi logo.jpg';
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import {AiFillHome, AiOutlineSearch, AiOutlineSchedule, AiFillSave} from 'react-icons/ai';
function Sidebar() {
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
            <aside className={`md:w-[30%] lg:w-[20%] rounded-r-2xl bg-[#E57C23] text-white h-[100vh] flex px-2`}>
              <div className="flex flex-col relative">
                  <div className="w-[50%] mx-auto text-center flex flex-col">
                    <div className="w-10 h-10 border-4 border-[#E57C23] font-bold rounded-full mx-auto text-center"><img src={logo} alt="logo" className="w-full h-full rounded-full"/></div>
                    <div className="font-bold tracking-tight">RESPI</div>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-1">
                    <div className="bg-gray-300 w-10 h-10 rounded-full"></div>
                    <div className="flex flex-col font-bold">Hello, <div className="font-semibold">{user.email}</div></div>
                  </div>
                  <div className="flex flex-col mt-8 space-y-2">
                    <NavLink to='/dash/home' className={({isActive})=> isActive ? 'text-[#E57C23] bg-white p-2 flex gap-3 uppercase rounded-r-md' : 'p-2 hover:bg-white hover:text-[#E57C23] duration-150 ease-linear rounded-r-md flex gap-3 uppercase'}>
                      <AiFillHome className="text-xl"/> 
                      <p>Home</p>
                    </NavLink>
                    <NavLink to="/dash/search" className={({isActive})=> isActive ? 'text-[#E57C23] bg-white p-2 flex gap-3 uppercase rounded-r-md' : 'p-2 hover:bg-white hover:text-[#E57C23] duration-150 ease-linear rounded-r-md flex gap-3 uppercase'}>
                      <AiOutlineSearch className="text-xl"/> 
                      <p>Search Recipe</p>
                    </NavLink>
                    <NavLink to='/dash/meal' className={({isActive})=> isActive ? 'text-[#E57C23] bg-white p-2 flex gap-3 uppercase rounded-r-md' : 'p-2 hover:bg-white hover:text-[#E57C23] duration-150 ease-linear rounded-r-md flex gap-3 uppercase'}>
                      <AiOutlineSchedule className="text-xl"/> 
                      <p>Meal Planner</p>
                    </NavLink>
                    <NavLink to='/dash/save' className={({isActive})=> isActive ? 'text-[#E57C23] bg-white p-2 flex gap-3 uppercase rounded-r-md' : 'p-2 hover:bg-white hover:text-[#E57C23] duration-150 ease-linear rounded-r-md flex gap-3 uppercase'}>
                      <AiFillSave className='text-xl'/> 
                      <p>Saved Recipe</p>
                    </NavLink>
                  </div>
                  <div className="absolute bottom-2 left-2">
                      <button className="p-2 uppercase font-bold  bg-white text-[#E57c23] rounded-md" onClick={signout}>Signout</button>
                  </div>
              </div>
            </aside>
        </>
     );
}

export default Sidebar;