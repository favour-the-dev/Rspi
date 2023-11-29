import bg from '../assets/loginsignup.jpeg';
import logo from '../assets/logormbg.png';
import { NavLink, useNavigate } from 'react-router-dom';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai';
import { useState} from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import auth from '../firebase';

function Signup() {
    const [clicked, setclicked] = useState(false);
    const [clicked2, setclicked2] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confpass, setConfPass] = useState('');
    const navigate = useNavigate();

    const signup = async (e)=>{
        e.preventDefault();
        if(firstName.trim() && lastName.trim() && email.trim() && password.trim() && confpass.trim() === ''){
            toast.error('Input all fields correctly');
        }else if(password.trim() !== confpass.trim()){
            toast.error('Password must be the same')
        }else{
            await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential)=>{
                console.log(userCredential)
                if(userCredential){
                    toast.success('Signup Completed Successfully')
                    navigate('/Login');
                }
            })
            .catch((error)=>{
                console.log(error)
            })
        }
    }
    function handleclick(e){
        setclicked(!clicked)
        changetype(e, clicked)
    }
    function changetype(element, clicked){
        const infield = element.target.parentElement.parentElement.previousElementSibling;
        if(!clicked){
            infield.type = 'text';
        }else if(clicked){
            infield.type = 'password';
        }
    }
    function handleclick2(e){
        setclicked2(!clicked2)
        changetype(e, clicked2)
    }
    return ( 
        <>  
            <div className="w-screen max-h-screen flex flex-col p-5 gap-20 lg:gap-15">
                <img src={bg} alt="" className='w-[100%] h-full absolute top-0 left-0 z-[-1] opacity-90'/>
                <div className='flex items-center text-[#E57C23] uppercase font-bold text-lg 4k:text-4xl sm:text-2xl gap-1'>
                    <div className='w-10 h-10 rounded-full'><img src={logo} alt="logo" className='rounded-full h-full border-2 border-[#E57C23]'/></div>Respi
                </div>
                <div className="bg-white w-full lg:w-1/3 flex flex-col gap-4 p-5 mx-auto rounded-md">
                    <div>
                        <h3 className='uppercase font-semibold text-xl text-[#E57C23]'>Sign Up</h3>
                        <p className='text-sm font-extralight text-[#E57C23]'>Start your creative culinary Journey on Respi.</p>
                    </div>
                    <form 
                    action="/Login" 
                    className='flex flex-col space-y-3'
                    onSubmit={(e)=>{signup(e)}}
                    >
                        <label htmlFor="firstname" className='flex flex-col'>
                            <input 
                            type="text" 
                            name="firstname" 
                            placeholder='Enter your firstname' 
                            className='border-gray-200 border-2 focus:outline-none p-2 rounded-md mx-auto w-full lg:w-[90%]'
                            value={firstName}    
                            onChange={(e)=>{
                                setFirstName(e.target.value)
                            }}
                            />
                        </label>
                        <label htmlFor="lastname" className='flex flex-col'>
                            <input 
                            type="text" 
                            name="firstname" 
                            placeholder='Enter your lastname' 
                            className='border-gray-200 border-2 focus:outline-none p-2 rounded-md mx-auto w-full lg:w-[90%]'
                            value={lastName}    
                            onChange={(e)=>{
                                setLastName(e.target.value)
                            }}   
                            />
                        </label>
                        <label htmlFor="email" className='flex flex-col'>
                            <input 
                            type="email" 
                            name="email" 
                            placeholder='Enter your email' 
                            className='border-gray-200 border-2 focus:outline-none p-2 rounded-md mx-auto w-full lg:w-[90%]'
                            value={email}   
                            onChange={(e)=>{
                                setEmail(e.target.value)
                            }}
                            />
                        </label>
                        <label htmlFor="password" className='flex flex-col gap-2 relative'>
                            <input 
                            type="password" 
                            name="password" 
                            placeholder='Enter your password' 
                            className='border-gray-200 border-2 focus:outline-none p-2 rounded-md mx-auto w-full lg:w-[90%]'
                            value={password}    
                            onChange={(e)=>{
                                setPassword(e.target.value)
                            }}
                            />
                            <div className='absolute bottom-[30%] right-[10%]'  onClick={(e)=>{handleclick(e)}}>
                                {!clicked? <AiFillEyeInvisible className='text-gray-600'/> : <AiFillEye className='text-gray-600'/>}
                            </div>
                        </label>
                        <label htmlFor="confpassword" className='flex flex-col gap-2 relative'>
                            <input 
                            type="password" 
                            name="confpassword" 
                            placeholder='Confirm your password' 
                            className='border-gray-200 border-2 focus:outline-none p-2 rounded-md mx-auto w-full lg:w-[90%]'
                            value={confpass}
                            onChange={(e)=>{
                                setConfPass(e.target.value);
                            }}
                            />
                            <div className='absolute bottom-[30%] right-[10%]'  onClick={(e)=>{handleclick2(e)}}>
                                {!clicked2? <AiFillEyeInvisible className='text-gray-600'/> : <AiFillEye className='text-gray-600'/>}
                            </div>
                        </label>
                        <button type='submit' className='bg-[#E57C23] mx-auto w-full lg:w-[90%] py-2 text-white text-center rounded-full hover:bg-[#E56C23] duration-150 ease-linear'>
                            Sign up
                        </button>
                    </form>
                    <div className='mx-auto w-[90%] flex gap-1 justify-center'>
                        <span>Already have an account?</span>
                        <NavLink to='/Login' className='text-[#E57C23] font-semibold capitalize'>Log in</NavLink>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Signup;