import Image  from "next/image";
import React from "react";
import { Button } from "@/components/ui/button"

function Courses () {
    return(
        <section className="mx-auto w-full w-[1280px] h-[1742px]">
            <div>
                <div>

                    <div>
                        <h1 className="h-[67px] w-[768px] lg:px-[550px] lg:m-[64px] px-[64px] mb-[30px] font-black lg:text-[56px] text-[32px] font-bold lg:ml-[2px] leading-[67.2px] font-roboto mt-[88px]">Courses</h1>
                        <p className="w-[824px] h-[27px] font-normal font-roboto text-lg lg:pl-[542px] pl-[92px] mb-[44px]">Your Ultimate Guide to learning</p>
                        <ul className="font-roboto w-[844px] h-[40px]  text-base font-normal flex gap-8 lg:pl-[512px] pl-[72px]">
                            <li className="underline decoration-black underline-offset-8">Popular</li>
                            <li>Recommended</li>
                            <li>Best Price</li>
                        </ul>
                    </div>
                    <div className="w-[2152px] h-[1132px] gap-[64px]">
                        <ul>
                            <li className=" lg:flex gap-[38px]">
                                <a>
                                    <Image className="my-[46px]"
                                    src={"/image/card (1).svg"} alt="hero-image" width={416} height={534}/>
                                </a>

                                <a>
                                    <Image className="my-[46px]"
                                    src={"/image/card (2).svg"} alt="hero-image" width={416} height={534}/>
                                </a>
                                
                                                       
                                <a>
                                    <Image className="my-[46px]"
                                    src={"/image/card (3).svg"} alt="hero-image" width={416} height={534}/>
                                </a>
                                </li>
                                     <li className="lg:flex gap-[38px]">
                                <a>
                                    <Image className="my-[46px] hidden sm:block"
                                    src={"/image/card (4).svg"} alt="hero-image" width={416} height={534}/>
                                </a>
     

                                <a>
                                <Image className="my-[46px] hidden sm:block"
                                    src={"/image/card (5).svg"} alt="hero-image" width={416} height={534}/>  
                                </a>

                                <a>
                                <Image className="my-[46px] hidden sm:block"
                                    src={"/image/card (6).svg"} alt="hero-image" width={416} height={534}/>  
                                 </a>

                                   </li>

                                  </ul>

                                </div>

                                <div className="lg:mt-[134px] lg:ml-[584px] mt-[644px] ml-[104px]">
                                    <Button variant="outline" className="w-[155px] h-[48px] mx-[4px] flex border-black">View All Courses</Button>

                                </div>

                             </div>          

                         </div>
            

        </section>

    )
}

export default Courses;