import Sidebar from "../components/sidebar";
import { Outlet } from "react-router-dom";
function Dashboard() {
    return ( 
        <>
            <div className="flex w-full h-full">
                <Sidebar/>
                <Outlet/>
            </div>
        </>
     );
}

export default Dashboard;