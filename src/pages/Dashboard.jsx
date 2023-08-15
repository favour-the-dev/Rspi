import auth from "../firebase";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
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
            <div>
                <h1>Hello, {user.email}</h1>
                {user? <button className="text-white uppercase bg-red-800 px-2" onClick={signout}>signout</button> : <h1>notsigned in</h1>}
            </div>
        </>
     );
}

export default Dashboard;