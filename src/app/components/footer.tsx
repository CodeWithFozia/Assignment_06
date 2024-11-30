import React from 'react';
import Image from 'next/image';


function Footer  ()  {
  return (
    <footer className="lg:h-[895px] lg:w-[1280px] lg:ml-[-74px] w-[428px] h-[1411px] text-black font-roboto py-8">
             <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start lg:justify-between gap-8">
            <div>
                <div>
                <h2 className="font-black text-[18px] font-semibold mb-2 leading-6 font-roboto text-center ml-[44px] lg:pr-[1014px]">Subscribe to our newsletter</h2>
                <p className="font-roboto font-normal ml-[44px] text-[16px] leading-[24px] font-black lg:pl-[44px] hidden sm:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="font-roboto font-normal text-[16px] leading-[24px] font-black text-center ml-[44px] lg:hidden">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
               </div>
          <div className="relative lg:ml-[-54px] px-[44px]">
          <div className="flex flex-col sm:flex-row gap-4 pt-[22px] lg:mt-[-104px]">
          <input
            type="text"
            placeholder="Enter your Email"
            id="footer-field"
            className="lg:w-[265px] w-[275px] h-[48px] bg-white bg-white rounded border border-black lg:ml-[944px] lg:mt-[44px] lg:ml-[44px]"/>
            <button className="lg:w-[119px] w-[275px] h-[48px] inline-flex text-black bg-white border-2 border-black py-2 px-6 lg:mt-[44px]">Subscribe</button>
            </div>
            </div>
            </div>

            <div className="container px-5 py-24 mx-auto flex justify-center items-between h-[524px] w-[1280px]">
            <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4 gap-10 w-[1120px] h-[225px] ml-[-324px]">
        
        <div className="w-[130.6px]
                        h-[40px]
                        lg:pt-[184px]
                        lg:ml-[-984px]
                        lg:ml-[-164px]
                        ml-[184px]
                        mt-[-114px]
                        p-[29px 0px 29px 0px]
                        gap-[10.5px]
                        opacity-[0px]">
        <Image src={"/image/Ddsgnr Library.svg"} alt="hero-image" width={250} height={40}/>
        </div>
      
      <div className="container mx-auto px-4 mt-8 lg:mt-[74px] grid grid-cols-1 md:grids-cols-3 gap-2 mr-[584px] mt-[-44px] lg:ml-[144px]">
        <h3 className="font-medium text-md mb-4">
          Courses
        </h3>
        <nav className="list-none mb-10">
          <li>
            <a className="text-black hover:text-gray-800">Business</a>
          </li>
          <li>
            <a className="text-black hover:text-gray-800">Development</a>
          </li>
          <li>
            <a className="text-black hover:text-gray-800">Technology</a>
          </li>
          <li>
            <a className="text-black hover:text-gray-800">Design</a>
          </li>
          <li>
            <a className="text-black hover:text-gray-800">Programming</a>
          </li>
        </nav>
      </div>
      <div className="ml-[184px] lg:mt-[-244px] lg:ml-[444px]">
        <h3 className="font-medium text-md mb-4 lg:ml-[-784px] lg:mt-[-6px]">
          Resources
        </h3>
        <nav className="list-none mb-10 lg:ml-[-784px]">
          <li>
            <a className="text-black hover:text-gray-800">Career</a>
          </li>
          <li>
            <a className="text-black hover:text-gray-800">Resume</a>
          </li>
          <li>
            <a className="text-black hover:text-gray-800">Learning</a>
          </li>
          <li>
            <a className="text-black hover:text-gray-800">Interview Preparation</a>
          </li>
          <li>
            <a className="text-black hover:text-gray-800">Jobs</a>
          </li>
        </nav>
      </div>
      <div className="ml-[-188px] lg:mt-[-498px] lg:ml-[-484px]">
        <h3 className="font-medium text-md mb-4 pt-[244px]">
          About Us
        </h3>
        <nav className="list-none mb-10">
          <li>
            <a className="text-black hover:text-gray-800">Contact</a>
          </li>
          <li>
            <a className="text-black hover:text-gray-800">Help/Support</a>
          </li>
          <li>
            <a className="text-black hover:text-gray-800">FAQ</a>
          </li>
          <li>
            <a className="text-black hover:text-gray-800">Terms and Conditions</a>
          </li>
          <li>
            <a className="text-black hover:text-gray-800">Partners</a>
          </li>
        </nav>
      </div>
      
      
    </div>
  </div>
  
  <div className="mt-8 text-center text-sm text-black pt-4 mt-[484px]">
    <div className="lg:mt-[124px] lg:ml-[-2144px] border-t border-black pt-[12px]">
      <div className="pl-[4px]">
        <div className="ml-[224px]">
          <label
            htmlFor="footer-field"
            className="leading-7 pl-[44px] ml-[-214px] lg:ml-[-884px] lg:text-sm text-[14px] text-black pr-[1299px]"
          >
            2023 Ddsgnr. All right reserved.
          </label>
          
        </div>
        <div className="pr-[884px] flex space-x-[-234px]">
        <div className="relative sm:w-64 w-[342px] h-[21px] lg:gap-[24px] mt-2 pr-[188px]">
        <label
            htmlFor="footer-field"
            className="leading-7 text-sm text-black underline underline-offset-8"
          >
             Privacy Policy
          </label>
          </div>
        
          <div className="relative sm:w-64 w-40 sm:mr-4 mr-2 mt-2">
          <label
            htmlFor="footer-field"
            className="leading-7 text-sm text-black underline underline-offset-8"
          >
             Terms of Service
          </label>
          </div>
          
          <div className="relative sm:w-64 w-40 sm:mr-4 mr-2 mt-2">
          <label
            htmlFor="footer-field"
            className="leading-7 text-sm text-black underline underline-offset-8 ml-[224px]"
          >
             CookiesSettings
          </label>
          </div>
          </div>
      

      </div>
      <span className="lg:inline-flex flex pr-[884px] lg:mt-[-214px] lg:ml-[844px] lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto pt-[42px] ml-[-144px]">
        <a className="text-black">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
        <a className="ml-3 text-black">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
          </svg>
        </a>
        <a className="ml-3 text-black">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
          </svg>
        </a>
        <a className="ml-3 text-black">
          <svg
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={0}
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            />
            <circle cx={4} cy={4} r={2} stroke="none" />
          </svg>
        </a>
      </span>
    </div>
  </div>
  </div>

         </footer>
 
  
  )
}

export default Footer;
    
   