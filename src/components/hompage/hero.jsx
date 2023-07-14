function Hero() {
    return ( 
        <>
            <div className="flex flex-col items-center px-2 justify-center mt-2 sm:mt-8 lg:mt-4 4k:mt-24 space-y-4">
                <div className="font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 4k:text-8xl uppercase md:w-[70%] text-center text-[#E57C23] font-capri tracking-wider">
                    Welcome to respi Your Go to place to get food recipe's
                </div>
                <div className="md:w-[50%] text-center text-xs lg:text-sm 4k:text-3xl font-semibold tracking-wider">
                    At Respi, we invite you to join our warm community of food lovers. Discover mouthwatering recipes, share culinary adventures, and find solace in the joy of cooking. Let us nourish your passion and foster connections that make your culinary journey truly fulfilling.
                </div>
                <div className="flex items-center gap-1 4k:text-2xl capitalize text-[#E57C23] font-semibold">
                    <div className="w-8 h-8 rounded-full bg-[#E57C23]"></div>
                    developed by Favour Odili
                </div>
            </div>
        </>
     );
}

export default Hero;