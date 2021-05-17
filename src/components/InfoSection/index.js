import React from 'react';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  Img,
  ImgWrap,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
} from './InfoElements';
import { Button } from './../ButtonElements';

const InfoSection = ({
  id,
  lightbg,
  darktexth,
  darktextp,
  topLine,
  heading,
  subtitle,
  buttonLabel,
  imgstart,
  img,
  alt,
  primarybg,
  darkfont,
  hoverdarkfont,
  hoverprimarybg,
}) => {
  return (
    <>
      <InfoContainer lightbg={lightbg} id={id}>
        <InfoWrapper>
          <InfoRow imgstart={imgstart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading darktexth={darktexth}>{heading}</Heading>
                <Subtitle darktextp={darktextp}>{subtitle}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth="true"
                    spy={true}
                    duration={500}
                    exact="true"
                    offset={-78}
                    primarybg={primarybg ? 1 : 0}
                    darkfont={darkfont ? 1 : 0}
                    hoverprimarybg={hoverprimarybg ? 1 : 0}
                    hoverdarkfont={hoverdarkfont ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img type="image/svg+xml" data={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
