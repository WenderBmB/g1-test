import React from 'react';
import Description from '../../Atoms/Description';
import { IGroup } from '../../Atoms/ItemList';
import Label from '../../Atoms/Label';
import MainNewsTitle from '../../Atoms/MainNewsTitle';
import { INews } from '../../Templates/Home';
import { IVideo } from '../SideNews/types';
import { Container } from './styles';

export interface IMainNews extends INews {
  rightNews?: boolean;
}

const MainNews: React.FC<IMainNews> = ({
  created,
  id,
  image,
  title,
  type,
  url,
  chapeu,
  children,
  group,
  section,
  summary,
  video,
  rightNews,
}) => {
  return (
    <Container img={image}>
      {chapeu && <Label whiteText={rightNews} text={chapeu} />}
      <div>
        <MainNewsTitle text={title} whiteText={rightNews} />
        {summary && <Description whiteText={rightNews} text={summary} />}
      </div>
    </Container>
  );
};

export default MainNews;
