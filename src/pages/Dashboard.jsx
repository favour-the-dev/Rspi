import Sidebar from "../components/sidebar";
import { Outlet } from "react-router-dom";
function Dashboard() {
    return ( 
        <>
            <div className="flex">
                <Sidebar/>
                <Outlet/>
            </div>
        </>
     );
}

export default Dashboard;