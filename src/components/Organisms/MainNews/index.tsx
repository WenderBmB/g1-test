import React from 'react';
import Description from '../../Atoms/Description';
import Label from '../../Atoms/Label';
import MainNewsTitle from '../../Atoms/MainNewsTitle';
import { Container } from './styles';

export interface IMainNews {
  labelText?: string;
  titleText: string;
  descriptionText?: string;
  imgUrl?: string;
  rightNews?: boolean;
}

const MainNews: React.FC<IMainNews> = ({
  labelText,
  titleText,
  descriptionText,
  imgUrl,
  rightNews,
}) => {
  return (
    <Container img={imgUrl} hasImg={!!imgUrl}>
      {labelText && <Label whiteText={rightNews} text={labelText} />}
      <div>
        <MainNewsTitle text={titleText} whiteText={rightNews} />
        {descriptionText && (
          <Description whiteText={rightNews} text={descriptionText} />
        )}
      </div>
    </Container>
  );
};

export default MainNews;
