import { toast } from "react-toastify";
import logo from '../assets/logormbg.png';
import authcontext from "../components/context";
import { Oval } from "react-loader-spinner";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
function Forgot() {
    const {loading, setLoading, resetPassword} = useContext(authcontext);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const sendlinktoreset = async (e)=>{
        e.preventDefault()
        try{
            if(email == ''){
                toast.error('No Email was provided');
            }else{
                await resetPassword(email)
                setLoading(false)
                toast.success('link successfully sent to email')
                navigate('/Login')
            }
        } catch(error){
            toast.error(error.message)
            setLoading(false)
        }
    }
    return ( 
        <>
            {loading ? (
                <Oval 
                height={40}
                width={40}
                color="#4fa94d"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}  
                />
            ) 
            : 
            (
                <div className="bg-gray-300 w-full h-[100vh] flex flex-col justify-center items-center">
                    <div className="w-4/5 lg:w-1/3 mx-auto bg-white rounded-md px-2 py-4 text-center flex flex-col space-y-2">
                        <div className="w-[50%] text-center mx-auto">
                            <div className="w-10 h-10 border-2 border-[#E57C23] text-center mx-auto rounded-full"><img src={logo} alt="logo" className="w-full h-full mx-auto rounded-full"/></div>
                            <h1 className="text-[#E57C23] font-bold text-xl uppercase">Respi</h1>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <h2 className="text-[#E57C23] font-semibold text-2xl uppercase">password reset</h2>
                            <form action="/" className="flex flex-col space-y-3" onSubmit={(e)=>{sendlinktoreset(e)}}>
                                <label htmlFor="email">
                                    <input type="email" name="email" placeholder='Enter a valid email address' value={email} onChange={(e)=>{setEmail(e.target.value)}} className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none"/>
                                </label>
                                <button type="submit" className="capitalize font-semibold tracking-wider bg-[#E57C23] text-white w-full rounded-md p-2">
                                    Reset password
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
     );
}

export default Forgot;