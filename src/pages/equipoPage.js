import React, { useState } from 'react';

import EquipoHeroSection from '../Equipo/EquipoHeroSection'
import Footer from '../components/Footer';
import Sidebar from '../Equipo/EquipoSidebar';
import Navbar from '../Equipo/EquipoNavbar';


const EquipoPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <EquipoHeroSection />
    
      <Footer />
      
    </>
  );
};

export default EquipoPage;