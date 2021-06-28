import React, { useState } from 'react';

import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElements';

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrorRight,
} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Siro Impresión 3D</HeroH1>
        <HeroP>
          La impresión del futuro, ahora y en tus manos
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='nosotros'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true}
            duration={1000}
            spy={true}
            exact='true'
            offset={-80}
          >
            Empecemos {hover ? <ArrowForward /> : <ArrorRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
