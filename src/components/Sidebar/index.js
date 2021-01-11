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

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about'>About</SidebarLink>
          <SidebarLink to='discover'>Discover</SidebarLink>
          <SidebarLink to='services'>Services</SidebarLink>
          <SidebarLink to='signip'>Sign Up</SidebarLink>
        </SidebarMenu>
        <SidebtnWrap>
          <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SidebtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
