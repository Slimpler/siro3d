import React, { useState } from 'react';

import Video from '../../videos/video.mp4';
import { Button } from '../../components/ButtonElements'

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

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id='home'>
     
      <HeroContent>
       
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
