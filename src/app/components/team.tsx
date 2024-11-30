import React from "react";
import Image from "next/image";


function Team () {
    return(
        <section className="text-black w-[1280px] h-[895px] font-roboto gap-[80px] bg-[#F7F7F7] mb-[84PX] hidden sm:block">
            
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-3xl font-bold title-font mb-4 text-black">
            OUR TEAM
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
              <Image src={"/Image/CardS 1.svg"} alt="hero-image" width={394.67} height={209}/>
      
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  
                  
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
              <Image src={"/Image/Card2.svg"} alt="hero-image" width={394.67} height={209}/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
              <Image src={"/Image/Card3.svg"} alt="hero-image" width={394.67} height={209}/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  
                </div>
              </div>
            </div>
      
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
              <Image src={"/Image/Card4.svg"} alt="hero-image" width={394.67} height={209}/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  
                </div>
              </div>
            </div>
           
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
              <Image src={"/Image/Card5.svg"} alt="hero-image" width={394.67} height={209}/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  
                  
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
              <Image src={"/Image/Card6.svg"} alt="hero-image" width={394.67} height={209}/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  
          
                </div>
              </div>
            </div>
          </div>
        </div>
      
      
              </section>
    )
}

export default Team;