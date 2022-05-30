import React from 'react';
import { Container } from './styles';

interface IMainNewsTitle {
  text: string;
  whiteText?: boolean;
}

const MainNewsTitle: React.FC<IMainNewsTitle> = ({ text, whiteText }) => {
  return <Container whiteText={whiteText}>{text}</Container>;
};

export default MainNewsTitle;
