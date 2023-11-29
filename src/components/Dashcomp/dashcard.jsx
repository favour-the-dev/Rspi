function Dashcard({imageUrl, displayName}) {
    return ( 
        <>
             <div className="w-[100%] md:w-52 mx-auto bg-gay-300 shadow-lg p-4 rounded-md flex flex-col gap-4 border-2 border-[#E48F45]">
                <div className="w-[100%] h-44">
                    <img src={imageUrl} alt="catimage" className="w-full rounded-md h-full"/>
                </div>
                <div className="text-[#E48F45] font-semibold uppercase">{displayName}</div>
            </div>
        </>
     );
}

export default Dashcard;