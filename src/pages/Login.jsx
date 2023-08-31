import bg from '../assets/loginsignup.jpeg';
import logo from '../assets/logormbg.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai';
import { useState} from 'react';
import auth from '../firebase';
import { signInWithEmailAndPassword} from 'firebase/auth';
function Login() {
    const [clicked, setclicked] = useState(false);
    const [focus, setFocus] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    function handleclick(e){
        setclicked(!clicked)
        console.log('clicked')
        changetype(e, clicked)
    }
    function changetype(element, clicked){
        const infield = element.target.parentElement.parentElement.previousElementSibling;
        if(!clicked){
            infield.type = 'text';
        }else if(clicked){
            infield.type = 'password';
        }
        console.log('changed')
    }

    const signin = async (e)=>{
        e.preventDefault()
        if(email == ''){
            toast.error('Email can not be empty')
        }else if (password == ''){
            toast.error('Password can not be empty');
        }else{
            await signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials)=>{
                if(userCredentials){
                    toast.success('log in successful')
                    navigate('/dash/home');
                }else{
                    toast.error('Incorrect Email or Password')
                }
            })
            .catch((error)=>{
                toast.error(error.message)
            })
        }
    }
    return ( 
        <>
            <div className="w-screen max-h-screen flex flex-col p-5 gap-20">
                <img src={bg} alt="" className='w-[100%] h-full absolute top-0 left-0 z-[-1] opacity-90'/>
                <div className='flex items-center text-[#E57C23] uppercase font-bold text-lg 4k:text-4xl sm:text-2xl gap-1'>
                    <div className='w-10 h-10 rounded-full'><img src={logo} alt="logo" className='rounded-full h-full border-2 border-[#E57C23]'/></div>Respi
                </div>
                <div className="bg-white w-full lg:w-1/3 flex flex-col gap-4 p-5 mx-auto rounded-md">
                    <div>
                        <h3 className='uppercase font-semibold text-xl text-[#E57C23]'>Log in</h3>
                        <p className='text-sm font-extralight text-[#E57C23]'>Continue your cooking journey on Respi</p>
                    </div>
                    <form action="/" className='flex flex-col space-y-3' onSubmit={(e)=>{signin(e)}}>
                        <label htmlFor="email" className='flex flex-col'>
                            <input 
                            type="email" 
                            name="email" 
                            placeholder='Enter your email' 
                            className='border-gray-200 border-2 focus:outline-none p-2 rounded-md mx-auto w-full lg:w-[90%]' 
                            value={email} 
                            onChange={(e)=>{
                                setEmail(e.target.value)
                            }}/>
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
                            onClick={()=>{
                                console.log('clicked field')
                                setFocus(true)
                            }}/>
                            <div 
                            className='absolute bottom-[60%] right-[10%]' 
                            onClick={(e)=>{focus? handleclick(e):null}}>
                                {!clicked? <AiFillEyeInvisible className='text-gray-600'/> : <AiFillEye className='text-gray-600'/>}
                            </div>
                            <NavLink to='/Forgot' className='text-[#E57C23] capitalizen font-semibold mx-auto w-full lg:w-[90%]'>Forgot Password?</NavLink>
                        </label>
                        <button type='submit' className='bg-[#E57C23] mx-auto w-full lg:w-[90%] py-2 text-white text-center rounded-full hover:bg-[#E56C23] duration-150 ease-linear'>
                            Log in
                        </button>
                    </form>
                    <div className='mx-auto w-[90%] flex gap-1 justify-center'>
                        <span>Dont have an account?</span>
                        <NavLink to='/Signup' className='text-[#E57C23] font-semibold capitalize'>Sign up</NavLink>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Login;