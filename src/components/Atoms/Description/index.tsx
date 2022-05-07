import React from 'react';
import { Container } from './styles';

interface IDescription {
  text: string;
}

const Description: React.FC<IDescription> = ({ text }) => {
  return <Container>{text}</Container>;
};

export default Description;
