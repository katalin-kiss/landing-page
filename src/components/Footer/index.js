import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About us</FooterLinkTitle>
            <FooterLink to="/">How it works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Contact</FooterLink>
            <FooterLink to="/">Terms of Services</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Services</FooterLinkTitle>
            <FooterLink to="/">Guided Tours</FooterLink>
            <FooterLink to="/">Packages</FooterLink>
            <FooterLink to="/">Booking</FooterLink>
            <FooterLink to="/">Consultation</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to={'/'} onClick={toggleHome}>
              Wander in Japan
            </SocialLogo>
            <WebsiteRights>
              Copyright &copy; {new Date().getFullYear()} Katalin Kiss
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" targets="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" targets="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" targets="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" targets="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" targets="_blank" aria-label="Linkedin">
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
