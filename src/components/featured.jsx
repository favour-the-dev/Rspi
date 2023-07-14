import FoodCard from "./foodcard";
import f1 from '../assets/fixed1.png';
import f2 from '../assets/fixed2.png';
import f3 from '../assets/fixed3.png';
import f4 from '../assets/fixed4.png';
import f5 from '../assets/fixed5.png';
import { createContext, useState } from "react";
import { NavLink } from "react-router-dom";

export const ClickContect = createContext();

function Featuredfood() {
    const [clickCard, SetClickcard] = useState(false);
    function clicked(){
        SetClickcard(!clickCard)
    }
    return (
        <>
            <div className=" w-[90%] lg:w-[100%] py-4 flex items-center space-x-4 lg:space-x-8 overflow-x-scroll mx-auto relative bottom-0 right-0 lg:justify-center inv overflow-y-hidden 4k:h-96">
                <ClickContect.Provider value={clicked}>
                    <FoodCard src={f1} text='Fresh and Healthy salad' cal='80 calories' time='5 mins' port='3 person'/>
                    <FoodCard src={f2} text='Spicy Beef noodles' cal='150 calories' time='18 mins' port='2 person'/>
                    <FoodCard src={f3} text='Red Hot Wings' cal='120 calories' time='45 mins' port='3 person'/>
                    <FoodCard src={f4} text='Healthy Fruit Smoothie' cal='110 calories' time='12 mins' port='3 person'/>
                    <FoodCard src={f5} text='Red Chicken Pie' cal='140 calories' time='30 mins' port='4 person'/>
                </ClickContect.Provider>
            </div>
           {clickCard &&  <div className="w-screen absolute min-h-screen top-0 left-0 flex flex-col justify-center z-30">
                <div className="absolute w-full h-full bg-gray-500 opacity-60 z-[-1]" onClick={clicked}></div>
                <div className="bg-white rounded-md w-[70%] md:w-[30%] mx-auto text-center py-8 px-2 flex flex-col items-center space-y-4">
                    <p className="text-xl font-bold text-[#E57C23]">Sign Up or Log In to see recipes of various dishes on Respi</p>
                    <NavLink className='capitalize px-6 py-1 4k:px-8 rounded-full text-center text-sm bg-[#E57C23] text-white font-bold border-2 border-transparent hover:bg-transparent hover:border-2 hover:border-[#E57C23] hover:text-[#E57C23] duration-150 ease-linear 4k:text-4xl' to='/Login'>
                        Log In
                    </NavLink>
                </div>
            </div>}
        </>
     );
}

export default Featuredfood;