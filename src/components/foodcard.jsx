import { useContext } from "react";
import { ClickContect } from "./featured";
const FoodCard = ({src, text, cal, time, port})=>{
    const clicked = useContext(ClickContect);
    return(
        <>
            <div className="flex flex-col space-y-2 bg-[#F5F5F5] p-2 w-52 h-52 4k:w-[25%] 4k:h-72 lg:w-40  rounded shadow-lg hover:shadow-md hover:translate-x-2 duration-150 ease-linear" onClick={()=>clicked()}>
                <div className="w-28 h-28 4k:w-56 4k:h-56 mx-auto text-center rounded-full">
                    <img src={src} alt="" className="w-full mx-auto rounded-full"/>
                </div>
                <div className="text-center">
                    <p className="font-bold w-[70%] capitalize mx-auto text-sm 4k:text-xl">{text}</p>
                    <p className="text-gray-500 text-xs 4k:text-lg">{cal}</p>
                </div>
                <div className=" border-t-2 border-gray-300 flex justify-between items-center w-[80%] mx-auto border-opacity-60">
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-xs 4k:text-lg text-gray-500">Time</p>
                        <p className="text-sm 4k:text-xl">{time}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-xs text-gray-500 4k:text-lg">Portion</p>
                        <p className="text-sm 4k:text-xl">{port}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FoodCard;