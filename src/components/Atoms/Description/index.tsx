import React from 'react';
import { Container } from './styles';

interface IDescription {
  text: string;
  whiteText?: boolean;
}

const Description: React.FC<IDescription> = ({ text, whiteText }) => {
  return <Container whiteText={whiteText}>{text}</Container>;
};

export default Description;
