import React from 'react';
import { Container } from './styles';

interface ISideNewsTitle {
  text: string;
}

const SideNewsTitle: React.FC<ISideNewsTitle> = ({ text }) => {
  return <Container>{text}</Container>;
};

export default SideNewsTitle;
