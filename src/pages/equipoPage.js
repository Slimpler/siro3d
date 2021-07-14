import React, { useState } from 'react';

import Equipo from '../components/Equipo';
import Footer from '../components/Footer';
import Sidebar from '../components/EquipoSidebar';
import Navbar from '../components/EquipoNavbar';

const EquipoPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Equipo />
      <Footer />
    </>
  );
};

export default EquipoPage;