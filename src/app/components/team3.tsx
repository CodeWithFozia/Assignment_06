import React from "react";
import Image from "next/image";

function Team3 () {
    return (
        <section className="mx-auto w-full lg:hidden lg:max-[14px] text-black mt-[384px] lg:py-[24px] lg:w-[1280px] lg:h-[895px] w-[428px] h-[1075px] font-roboto gap-[80px] bg-#F7F7F7] mb-[84px]">
            
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="lg:text-5xl text-[32px] font-bold font-roboto mb-4 text-black">
      OUR TEAM
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-black lg:text-lg text-18px font-roboto py-[16px] lg:hidden">
     Lorem ipsum dolor sit amet, consectetur <br/> adipisicing elit. 
      </p>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-black lg:text-lg text-18px font-roboto py-[16px] hidden sm:block">
      Lorem ipsum dolor sit amet consectetur adipisicing elit
      </p>
    </div>
    <div className="lg:flex lg:flex-wrap m-14 gap-[64px] h-[482px] w-[1280px]">
      <div className="lg:w-1/4 md:w-1/2 mr-[984px]">
        <div className="h-full lg:flex lg:flex-col items-center text-center">
          <a>
        <Image className="my-[46px]"
        src={"/Image/cards 1.svg"} alt="hero-image" width={394.67} height={209}/>
        </a>
        
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 mr-[984px]">
        <div className="h-full lg:flex lg:flex-col items-center text-center">

          <a>
        <Image className="my-[46px] " 
        src={"/Image/card2.svg"} alt="hero-image" width={394.67} height={209}/>
          
          </a>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 mr-[984px]">
        <div className="h-full lg:flex lg:flex-col items-center text-center">
          <a>
        <Image className="my-[46px]"
        src={"/Image/card3.svg"} alt="hero-image" width={394.67} height={209}/>
        </a>
          
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 ">
        <div className="h-full flex flex-col items-center text-center">
          <a>
        <Image className="my-[1px] hidden sm:block" 
        src={"/Image/card4.svg"} alt="hero-image" width={394.67} height={209}/>

          </a>

          </div>
        </div>
      <div className="lg:w-1/4 md:w-1/2">
        <div className="h-full flex flex-col items-center text-center">
          <a>
        <Image className="my-[1px] hidden sm:block" 
        src={"/Image/card5.svg"} alt="hero-image" width={394.67} height={209}/>
          </a>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 ">
        <div className="h-full flex flex-col items-center text-center">
          <a>
        <Image className="my-[1px] hidden sm:block"
         src={"/Image/card6.svg"} alt="hero-image" width={394.67} height={209}/>
         </a>
            
        </div>
      </div>

      <div className="border-black border rounded-lg mx-[138px] ml-[56px] mt-[14px] text-base font-normal border-[black] rounded-lg w-[155px] h-[48px] text-center p-3">
        <button className="h-[48px] w-[155px] ml-[24px] mx-[4px] flex">View All</button>
      </div>
    </div>
  </div>


        </section>
    )
}

export default Team3;