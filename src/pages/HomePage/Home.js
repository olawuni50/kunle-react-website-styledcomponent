import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import { SliderData } from '../../components/HeroSection/SliderData';
import InfoSection from '../../components/InfoSection/InfoSection';
import OurTeam from '../../components/OurTeam/OurTeam';
import Pricing from '../../components/Pricing/Pricing';
import Services from '../../components/Services/Services';
// import Sign from '../../components/SignIn/Sign';
import {homeObjFour, homeObjThree, homeObjTwo} from "./Data";

const Home = () => {
    return (
        <>
          <HeroSection slides={SliderData}/>
          <Services/>
          <InfoSection {...homeObjTwo}/> 
          <Pricing/>              
          <OurTeam/>
          <InfoSection {...homeObjFour}/> 
          <InfoSection {...homeObjThree}/> 
    
        </>
    )
} 
 
export default Home
  