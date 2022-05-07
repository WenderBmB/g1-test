import React from 'react';
import { Container } from './styles';

interface IMainNewsTitle {
  text: string;
  haveImg?: boolean;
}

const MainNewsTitle: React.FC<IMainNewsTitle> = ({ text }) => {
  return <Container>{text}</Container>;
};

export default MainNewsTitle;
