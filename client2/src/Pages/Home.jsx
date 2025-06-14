import React, { useEffect, useState } from "react";
import HeroSection from '../components/HeroSection'
import ServiceCards from '../components/ServiceCards'
import HowWorks from '../components/HowWorks'
import FeaturedServices from '../components/FeaturedService'
import TopRatedSection from '../components/TopRatedSection'
import ImageSection from '../components/ImageSection'
import TrustedProvider from '../components/TrustedProvider'
import BlogSection from '../components/BlogSection'
import CtaSection from '../components/CtaSection'


function Home() {
 



  return (
    <>
       <HeroSection/>
   <ServiceCards/>
   <HowWorks/>
   <FeaturedServices/>
   <TopRatedSection/>
   <ImageSection/>
   <TrustedProvider/>
   <BlogSection/>
   <CtaSection/>
      
    </>
  );
}

export default Home;
