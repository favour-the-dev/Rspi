import { useEffect, useState} from "react";
import Dashnav from "../components/Dashcomp/Dashnav";
import { fetchApi } from "../components/fetch";
function Dashhome() {
    const date = new Date().toLocaleDateString();
    console.log(date)
    const url = ''
    const emparr = []
    const [earray, setEarray] = useState([]);
    useEffect(()=>{
        fetchApi(url)
        .then((data)=>{
            // data from api
            const keys = Object.keys(data);
            keys.forEach((key)=>{
                // console.log(key, data[key][4])
                if(key === 'browse-categories'){
                    // setAarray(data[key][0])
                    data[key].forEach((dk)=>{
                        // pushing necesary data to an empty array
                        emparr.push(dk.display)
                    })
                }
            })
            setEarray(emparr)
            // console.log(emparr[0].displayName)
            // console.log(aarray)
        }
        ).catch((error)=>{console.log(error)})
    }, [])

    console.log(earray)
    return ( 
        <>
            <div className="w-full h-full p-2 overflow-scroll overflow-x-hidden">
                <Dashnav/>
                <div className='p-4'>
                    <div className="flex flex-col md:flex-row md:justify-between gap-4">
                        <h1 className='text-[#E48F45] text-xl lg:text-4xl font-bold'>Welcome back, Weve been expecting you!</h1>
                        <h2 className="text-[#E48F45] text-xl lg:text-3xl font-semibold">{date}</h2>
                    </div>
                    <div className="mt-8 flex flex-col">
                        {/* search bar */}
                        <h2 className="font-bold text-lg md:text-3xl text-[#F5CCA0]">Featured Categories</h2>
                        <div className="flex flex-wrap gap-2 items-center">
                            {earray.map((arr, index)=>{
                                return (
                                    <div className="w-[100%] md:w-52 mx-auto bg-gay-300 shadow-lg p-4 rounded-md flex flex-col gap-4" key={index}>
                                        <div className="w-[100%] h-44">
                                            <img src={arr.categoryImage} alt="catimage" className="w-full rounded-md h-full"/>
                                        </div>
                                        <div className="text-[#E48F45] font-semibold uppercase">{arr.displayName}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default Dashhome;