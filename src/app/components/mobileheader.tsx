import React from "react";
import Image from "next/image";

function MobileHeader () {
    return (
       <header className="h-[72px] w-[428px] pr-[24px] pl-[24px] border-b border-black bg-[#F7F7F7] lg:hidden">
        <div className="flex justify-between items-center p-4">
            <div>
                <a>
                    <Image src={" /Image/Ddsgnr Library.svg"} alt="hero-image" width={130} height={41}/>
                </a>
            </div>
            <a>
                <Image src={"/Image/Column.svg"} alt="hero-image" width={48} height={48}/>
            </a>
        </div>
       </header>
    )
}

export default MobileHeader;