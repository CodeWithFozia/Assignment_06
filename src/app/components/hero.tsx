import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button"


const Hero = () => {
    return(
        <div className="hero mx-auto w-full max-w-[1280px] px-4 py-8 flex flex-col-reverse lg:flex-row items-center lg:justify-between">
            <div className=" order-2 lg:order-1 w-full lg:w-[50%] text-left lg:text-left">
                <h1 className="text-[28px] font-black lg:text-[48px] font-bold leading-tight font-roboto">Learn new skills <br /> online with ease</h1>
                <p className="mt-4 text-[16px] font-roboto font-normal lg:text-[18px] font-black ">Discover a wide range of courses covering a variety of <br /> subjects, taught by expert instructors</p>
                <div className="flex flex-wrap lg:flex-nowrap gap-4 mt-6">
                    <Button variant="outline" className="w-[150px] h-[48px] bg-black text-white ">Start Learning Now</Button>
                    <Button variant="outline" className="w-[150px] h-[48px] border-black border-2">Explore Courses</Button>

                </div>
            </div>

            <div className="order-1 lg:order-2 w-full lg:w-[50%] mt-6 lg:mt-0">
                <Image src={"/Image/Image (1).svg"} alt="hero-image" width={720} height={900}></Image>
            </div>
        </div>
    )
}

export default Hero;