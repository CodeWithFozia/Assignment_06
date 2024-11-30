import React from "react";
import Image from "next/image";




const Header2 = () => {
    return (
        <header className="text-black font-roboto h-[72px] w-[1280px] bg-[#F7F7F7] my-[16px] border-b border-black pb-2 hidden sm:block">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-black mb-4 md:mb-0">
                    <Image src={"/image/Ddsgnr Library.svg"} alt="hero-image" width={130.6} height={41}/>
                
                </a>
        
                <nav className="md:ml-auto flex flex-warp items-center bg-white h-[44px] text-base font-normal font-roboto justify-center gap-[32px]">
                    <a className="mr-8 hover:text-black underline underline-offset-8">Home</a>
                    <a className="mr-8 hover:text-black">Courses</a>
                    <a className="mr-8 hover:text-black">Services</a>
                    <a className="mr-8 hover:text-black">Achievement</a>
                    <a className="mr-8 hover:text-black">About Us</a>
                    <a className="mr-8 hover:text-black">Testimonial</a>
                </nav>

                <button className="space-x-2 inline-flex items-center font-roboto bg-white text-black border-2 py-1 px-3 focus:outline-none hover:bg-gray-100 rounded text-base mt-4 md:mt-0">
                    Login
                    <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                    >


                    </svg>
                </button>


                <button className="inline-flex items-center bg-black font-roboto text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-100 rounded text-base mt-4 md:mt-0">
                    Sign Up
                    <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5 ml-1"
                    viewBox="0 0 24 24"
                    >

                    </svg>
                </button>


            </div>
        </header>

    )

}


export default Header2;