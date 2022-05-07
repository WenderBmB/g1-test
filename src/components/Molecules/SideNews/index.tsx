import React from 'react';
import { Container } from './styles';

import Img from '../../../assets/Rectangle 18.png';
import LiveBox from '../../Atoms/LiveBox';
import SideNewsTitle from '../../Atoms/SideNewsTitle';
import NewsTime from '../../Atoms/NewsTime';
import NewsGroup from '../../Atoms/NewsGroup';

const SideNews: React.FC = () => {
  return (
    <Container>
      <img src={Img} alt="Imagem" />
      <div>
        <LiveBox />
        <SideNewsTitle text="Exemplo" />
        <div>
          <NewsTime text="Há 3 horas" />
          <p>&#8212;</p>
          <NewsGroup text="Exemplo" />
        </div>
      </div>
    </Container>
  );
};

export default SideNews;
