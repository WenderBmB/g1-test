import React from 'react';
import MainNews from '../MainNews';

import { Container } from './styles';

const MainNewsGroup: React.FC = () => {
  return (
    <Container>
      <MainNews titleText="título 1" />
      <MainNews titleText="título 2" />
    </Container>
  );
};

export default MainNewsGroup;
