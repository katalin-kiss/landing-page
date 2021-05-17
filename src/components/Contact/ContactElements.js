import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BLACKCOFFEE, COPPERRED, CRIMSONUA } from '../StyleConstants';
import { FiArrowLeftCircle } from 'react-icons/fi';
import { ALABASTER } from './../StyleConstants';

export const ContactContainer = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: ${COPPERRED};
`;

export const FormWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: ${ALABASTER};
  font-weight: 700;
  font-size: 32px;
  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const ArrowIcon = styled(FiArrowLeftCircle)`
  color: ${BLACKCOFFEE};
  height: 35px;
  width: 35px;
  cursor: pointer;

  &:hover {
    color: ${ALABASTER};
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: ${BLACKCOFFEE};
  color: ${ALABASTER};
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const Card = styled.div`
  background: ${BLACKCOFFEE};
  color: ${ALABASTER};
  max-width: 400px;
  font-weight: 400;
  height: auto;
  width: 100%;
  display: grid;
  margin: 20px auto;
  padding: 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: ${ALABASTER};
  font-size: 20px;
  font-weight: 400px;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: ${ALABASTER};
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: ${CRIMSONUA};
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: ${ALABASTER};
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background: ${ALABASTER};
    color: ${BLACKCOFFEE};
  }
`;

export const Text = styled.span`
  text-align: center;
  color: ${ALABASTER};
  font-weight: 400;
  max-width: 400px;
  font-size: 24px;
`;
