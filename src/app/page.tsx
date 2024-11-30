import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Logo from "./components/logo";
import Achivement from "./components/achivements";
import Courses from "./components/courses";
import Team from "./components/team";
import Team3 from "./components/team3";
import Header2 from "./components/header2";
import Testimonals from "./components/testimonals";
import Section from "./components/section";
import MobileHeader from "./components/mobileheader";



function Home () {
  return(
    <div>
      <Header />
      <Header2 />
      <MobileHeader/>
      <Hero />
      <Logo />
      <Section/>
      <Achivement />
      <Courses />
      <Team/>
      <Team3 />
      <Testimonals />
      <Footer />
  
      
    </div>
  )
}

export default Home;