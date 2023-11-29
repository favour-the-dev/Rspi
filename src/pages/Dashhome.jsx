import { useEffect, useState} from "react";
import Dashnav from "../components/Dashcomp/Dashnav";
import Dashcard from "../components/Dashcomp/dashcard";
import categories from "../categories";
// import axios from "axios";
// import { fetchApi } from "../components/fetch";
import { Oval } from "react-loader-spinner";
function Dashhome() {
    const date = new Date().toLocaleDateString();
    const emparr = categories;
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 2000)
    }, [])
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
                        {loading ? 
                                <Oval
                                    height={80}
                                    width={80}
                                    color="#E48F45"
                                    wrapperStyle={{}}
                                    wrapperClass="w-full h-[50dvh] flex items-center justify-center"
                                    visible={true}
                                    ariaLabel='oval-loading'
                                    secondaryColor="#E48F45"
                                    strokeWidth={2}
                                    strokeWidthSecondary={2}
                                />
                                :
                                <div className="flex flex-wrap gap-2 items-center mt-4">
                                    {emparr.map((arr, index)=>{
                                        return (
                                            <Dashcard
                                                displayName={arr.displayName}
                                                imageUrl={arr.imageUrl}
                                                key={index}
                                            />
                                        );
                                    }
                                    
                                    )}
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
     );
}

export default Dashhome;


   // useEffect(()=>{
    //     fetchApi(url)
    //     .then((data)=>{
    //         // data from api
    //         const keys = Object.keys(data);
    //         keys.forEach((key)=>{
    //             // console.log(key, data[key][4])
    //             if(key === 'browse-categories'){
    //                 // setAarray(data[key][0])
    //                 data[key].forEach((dk)=>{
    //                     // pushing necesary data to an empty array
    //                     emparr.push(dk.display)
    //                 })
    //             }
    //         })
    //         setEarray(emparr)
    //         setLoading(false)
    //         // console.log(emparr[0].displayName)
    //         // console.log(aarray)
    //     }
    //     ).catch((error)=>{console.log(error)})
    // }, [])
    // const newarr = earray.slice(0, 8);
    // console.log(earray)