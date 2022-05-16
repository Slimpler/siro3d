import React, { useState } from 'react';
import styled from 'styled-components'
import Video from '../../videos/video.mp4';
import { Button } from '../../components/ButtonElements'
import Icon1 from '../../images/carlos.png';
import Icon2 from '../../images/nico.png';
import Icon3 from '../../images/juan.jpg';

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  BtnLink,
/*   ArrowForward,
  ArrorRight, */
} from './HeroElements';

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
}
from '../../components/Productos/ServicesElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <ServicesContainer id='equipo'>
      <ServicesH1>Equipo Alenma</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Carlos Zamora</ServicesH2>
          <ServicesP>
            Lider del proyecto Alenma
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Nicolás Delgado</ServicesH2>
          <ServicesP>
            Web designer
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Juanito Perez</ServicesH2>
          <ServicesP>
            Gerente de proyecto
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default HeroSection;

