import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Siro 3D
            </SocialLogo>
            <WebsiteRights>
              Siro 3D &copy; {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              {/* <SocialIconLink
                href='//www.facebook.com/'
                target='_blank'
                aria-label='Facebook'
              >
                 <FaFacebook />
              </SocialIconLink> */}
              <SocialIconLink
                href='https://www.instagram.com/siro.3d/'
                target='_blank'
                aria-label='Instagram'
              > 
                <FaInstagram />
              </SocialIconLink>
              {/* <SocialIconLink
                href='//www.youtube.com/'
                target='_blank'
                aria-label='Youtube'
              >
                <FaYoutube />
              </SocialIconLink> */}
              <SocialIconLink
                href='https://twitter.com/d_siro3?lang=es'
                target='_blank'
                aria-label='Twitter'
              > 
                <FaTwitter /> 
              </SocialIconLink>
              <SocialIconLink
                href='https://es.linkedin.com/in/carlos-flores-zamora-73720a166'
                target='_blank'
                aria-label='Linkedin'
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
