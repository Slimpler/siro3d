import React from 'react';

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebtnWrap,
  SidebarRoute,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='Nosotros' onClick={toggle}>
            Nosotros
          </SidebarLink>
          <SidebarLink to='Aula Maker' onClick={toggle}>
            Aula Maker
          </SidebarLink>
          <SidebarLink to='Productos' onClick={toggle}>
            Productos
          </SidebarLink>
          <SidebarLink to='Impresora' onClick={toggle}>
            Impresora
          </SidebarLink>
        </SidebarMenu>
       {/*  <SidebtnWrap>
          <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SidebtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
