import React from 'react';

import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-5.svg';

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements';

const Productos = () => {
  return (
    <ServicesContainer id='Productos'>
      <ServicesH1> Productos</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Impresoras 3D</ServicesH2>
          <ServicesP>
            Traemos tu imaginación a la realidad.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Estudio</ServicesH2>
          <ServicesP>
            Trabajamos para el mundo y en su ayuda.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Aprender Primero</ServicesH2>
          <ServicesP>
            Aprende y enseña, por un mundo mejor.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Productos;
