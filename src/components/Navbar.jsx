import logo from '../assets/respi logo.jpg'
import { NavLink } from 'react-router-dom';
function Navbar() {
    return ( 
        <>
            <nav className="w-screen p-2 lg:px-6 lg:py-6">
                <div className="flex justify-between items-center">
                    <div className='flex items-center text-[#E57C23] uppercase font-bold text-lg 4k:text-4xl sm:text-2xl gap-1'>
                        <div className='w-10 h-10 lg:w-12 lg:h-12 rounded-full'><img src={logo} alt="logo" className='rounded-full h-full border-2 border-[#E57C23]'/></div>Respi
                    </div>
                    <div className='flex items-center gap-2'>
                        <NavLink className='capitalize px-6 py-1 4k:px-8 rounded-full text-center text-sm bg-[#E57C23] text-white font-bold border-2 border-transparent hover:bg-transparent hover:border-2 hover:border-[#E57C23] hover:text-[#E57C23] duration-150 ease-linear 4k:text-4xl' to='/Login'>Log in</NavLink>
                    </div>
                </div>
            </nav>
        </>
     );
}

export default Navbar;