import React from 'react';
import Description from '../../Atoms/Description';
import Label from '../../Atoms/Label';
import MainNewsTitle from '../../Atoms/MainNewsTitle';
import { Container } from './styles';

interface IMainNews {
  labelText: string;
  titleText: string;
  descriptionText: string;
  imgUrl?: string;
}

const MainNews: React.FC<IMainNews> = ({
  labelText,
  titleText,
  descriptionText,
  imgUrl,
}) => {
  let haveImg = false;
  if (imgUrl !== '') {
    haveImg = true;
  }

  return (
    <Container img={imgUrl} hasImg={haveImg}>
      <Label text={labelText} />
      <MainNewsTitle text={titleText} />
      <Description text={descriptionText} />
    </Container>
  );
};

export default MainNews;
