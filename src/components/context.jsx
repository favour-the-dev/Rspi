import { createContext, useState } from "react";
import auth from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

const authcontext = createContext({
    resetPassword : ()=> {},
})

export function Contextprovider({children}) {
    const [loading, setLoading] = useState(false);

    const resetPassword = (email)=>{
        setLoading(true);
        sendPasswordResetEmail(auth, email)
    }
    return ( 
            <authcontext.Provider value={{
             loading,
             setLoading, 
             resetPassword
             }}>
                {children}
            </authcontext.Provider>
     );
}

export default authcontext;