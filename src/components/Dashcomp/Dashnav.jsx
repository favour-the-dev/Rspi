import { useContext } from 'react';
import logo from '../../assets/respi logo.jpg';
import {AiOutlineMenu} from 'react-icons/ai';
import authcontext from '../context';
function Dashnav() {
    const {clicked, setClicked} = useContext(authcontext);
    return ( 
        <>
            <div className='flex flex-col items-center md:hidden'>
                <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center text-[#E57C23] gap-1'>
                        <div className='w-10 h-10 flex justify-center text-center rounded-full border-2 border-[#E57C23]'>
                            <img src={logo} alt="logo" className='w-full rounded-full'/>
                        </div>
                        <div className='uppercase font-bold text-xl'>Respi</div>
                    </div>
                    <div className='text-2xl' onClick={()=> setClicked(!clicked)}>
                        {!clicked ? <AiOutlineMenu/> : null}
                    </div>
                </div>
            </div>
        </>
     );
}

export default Dashnav;