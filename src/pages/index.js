import React, { useState } from 'react';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';
import {
  introductionInfo,
  servicesInfo,
  heroInfo,
} from './../components/InfoSection/Data';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection {...heroInfo} />
      <InfoSection {...introductionInfo.objectOne} />
      <InfoSection {...introductionInfo.objectTwo} />
      <InfoSection {...introductionInfo.objectThree} />
      <Services services={servicesInfo} />
      <Footer />
    </>
  );
};

export default Home;
