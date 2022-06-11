import React from 'react';
import { Container } from './styles';

interface ILabel {
  text: string;
  whiteText?: boolean;
}

const Label: React.FC<ILabel> = ({ text, whiteText }) => {
  return <Container whiteText={whiteText}>{text}</Container>;
};

export default Label;
