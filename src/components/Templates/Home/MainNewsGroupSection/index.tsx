import React from 'react';
import MainNews, { IMainNews } from '../../../Organisms/MainNews';

import { Container } from './styles';

interface IMainNewsGroupSection {
  mainNews: IMainNews[];
}

const MainNewsGroupSection: React.FC<IMainNewsGroupSection> = ({
  mainNews,
}) => {
  console.log('Main News Identification', mainNews);
  return (
    <Container>
      <MainNews {...mainNews[0]} />
      <MainNews {...mainNews[1]} rightNews />
    </Container>
  );
};

export default MainNewsGroupSection;
