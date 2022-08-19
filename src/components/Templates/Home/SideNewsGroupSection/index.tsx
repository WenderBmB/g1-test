import React, { useState } from 'react';
import SideNews from '../../../Organisms/SideNews';
import { ISideNews } from '../../../Organisms/SideNews/types';

import { Container } from './styles';

interface ISideNewsGroupSection {
  sideNews: ISideNews[];
}

const SideNewsGroupSection: React.FC<ISideNewsGroupSection> = ({
  sideNews,
}) => {
  console.log('Side News Identification', sideNews);

  return (
    <Container>
      <SideNews {...sideNews[0]} />
    </Container>
  );
};

export default SideNewsGroupSection;
