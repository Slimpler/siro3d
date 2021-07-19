import React, { useState } from 'react';

import Video from '../../videos/video.mp4';


import {
  EquipoContainer,
  EquipoBg,
  VideoBg,
  EquipoContent,
 /*  EquipoH1,
  EquipoP,
  EquipoBtnWrapper,
  EquipoBtnLink,
  ArrowForward,
  ArrorRight,  */
} from './equipoElements';

const Equipo = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <EquipoContainer id='home'>
      <EquipoBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </EquipoBg>
      <EquipoContent>
        
      </EquipoContent>
    </EquipoContainer>
  );
};

export default Equipo;