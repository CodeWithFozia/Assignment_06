import React from "react";
import Image from "next/image";


function Logo () {
    return (
      <div className="w-full py-8 bg-[#F7F7F7]">
        <div className="container mx-auto px-4">
            <h1 className="font-roboto text-center lg:text-left text-xl lg:text-2xl font-bold mb-6 lg:mb-0">Trusted by 2000+ companies <br/>Worldwide.</h1>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap mb-9 justify-center items-center gap-4 lg:gap-6">
        <Image src={"/image/Airbnb Logo.svg"} alt="hero-image" width={123.8} height={38.52}/>
        <Image src={"/image/Airbnb Logo (1).svg"} alt="hero-image" width={123.8} height={38.52}/>
        <Image src={"/image/Airbnb Logo (2).svg"} alt="hero-image" width={123.8} height={38.52}/>
        <Image src={"/image/Airbnb Logo (3).svg"} alt="hero-image" width={123.8} height={38.52}/>
        <Image src={"/image/Airbnb Logo (4).svg"} alt="hero-image" width={123.8} height={38.52}/>
        <Image src={"/image/Airbnb Logo (5).svg"} alt="hero-image" width={123.8} height={38.52}/>
        </div>
      </div>
    )
}

export default Logo;