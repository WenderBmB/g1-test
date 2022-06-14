import React from 'react';
import SideNews from '../../../Organisms/SideNews';
import { ISideNews } from '../../../Organisms/SideNews/types';

import { Container } from './styles';

interface ISideNewsGroupSection {
  sideNews: ISideNews[];
}

const MainNewsGroupSection: React.FC<ISideNewsGroupSection> = ({
  sideNews,
}) => {
  console.log('Side News Identification', sideNews);
  return (
    <Container>
      <SideNews {...sideNews[0]} />
      <SideNews {...sideNews[1]} />
      <SideNews {...sideNews[2]} />
      <SideNews {...sideNews[3]} />
    </Container>
  );
};

export default MainNewsGroupSection;
