function Dashcard({imageUrl, displayName, swiperclass}) {
    return ( 
        <>
             <div className={`w-[100%] mx-auto bg-gay-300 shadow-lg p-6 rounded-md flex flex-col gap-4 border-2 border-[#E48F45] ${swiperclass}`}>
                <div className="w-[100%] h-[90%]">
                    <img src={imageUrl} alt="catimage" className="w-full rounded-md h-full"/>
                </div>
                <div className="text-[#E48F45] lg:text-2xl font-semibold uppercase">{displayName}</div>
            </div>
        </>
     );
}

export default Dashcard;