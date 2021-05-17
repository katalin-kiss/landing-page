import styled from 'styled-components';
import { Link } from 'react-scroll';
import { BLACKCOFFEE, ALABASTER, CRIMSONUA } from './StyleConstants';

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primarybg }) => (primarybg ? CRIMSONUA : BLACKCOFFEE)};
  white-space: nowrap;
  padding: ${({ bigpadding }) => (bigpadding ? '14px 48px' : '12px 30px')};
  color: ${({ darkfont }) => (darkfont ? BLACKCOFFEE : ALABASTER)};
  font-size: ${({ fontbig }) => (fontbig ? '22px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ hoverprimarybg }) =>
      hoverprimarybg ? CRIMSONUA : ALABASTER};
    color: ${({ hoverdarkfont }) => (hoverdarkfont ? BLACKCOFFEE : ALABASTER)};
  }
`;
