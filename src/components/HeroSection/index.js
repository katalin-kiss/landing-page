import React, { useState } from 'react';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements';
import Video from '../../video/fuji.mp4';
import { Button } from '../ButtonElements';

const HeroSection = ({
  primarybg,
  darkfont,
  fontbig,
  bigpadding,
  hoverdarkfont,
  hoverprimarybg,
}) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Discover Japan with Us</HeroH1>
        <HeroP>
          Travel in small groups or alone around Japan. We help you with the
          organization of your adventure!
        </HeroP>
        <HeroBtnWrapper>
          <Button
            primarybg={primarybg ? 1 : 0}
            darkfont={darkfont ? 1 : 0}
            fontbig={fontbig ? 1 : 0}
            bigpadding={bigpadding ? 1 : 0}
            to="contact"
            hoverprimarybg={hoverprimarybg ? 1 : 0}
            hoverdarkfont={hoverdarkfont ? 1 : 0}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
