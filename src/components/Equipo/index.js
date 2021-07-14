import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import img from '../../images/carlos.png';

import {
  EquipoContainer,
  EquipoBg,
  VideoBg,
  EquipoContent,
  EquipoH1,
  EquipoP,
  EquipoBtnWrapper,
  EquipoBtnLink,
  EquipoCard,
/*   ArrowForward,
  ArrorRight, */
} from './equipoElements';

const Equipo = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <EquipoContainer id='home'>
        <EquipoCard>
            <img src={img}/>
    
        </EquipoCard>
        <EquipoCard>
            <img src={img}/>

        </EquipoCard>
        <EquipoCard>
            <img src={img}/>
            
        </EquipoCard>
    </EquipoContainer>
  );
};

export default Equipo;