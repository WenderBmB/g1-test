import React from 'react';
import { Container } from './styles';

interface ILabel {
  text: string;
}

const Label: React.FC<ILabel> = ({ text }) => {
  return <Container>{text}</Container>;
};

export default Label;
