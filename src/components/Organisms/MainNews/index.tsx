import React from 'react';
import Description from '../../Atoms/Description';
import { IGroup } from '../../Atoms/ItemList';
import Label from '../../Atoms/Label';
import MainNewsTitle from '../../Atoms/MainNewsTitle';
import { IVideo } from '../SideNews/types';
import { Container } from './styles';

export interface IMainNews {
  chapeu?: string;
  image: string;
  section?: string;
  summary?: string;
  title: string;
  url: string;
  video?: IVideo | null;
  group?: IGroup[];
  type: string;
  created: string;
  id: string;
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
    <Container img={image} hasImg={!!image}>
      {chapeu && <Label whiteText={rightNews} text={chapeu} />}
      <div>
        <MainNewsTitle text={title} whiteText={rightNews} />
        {summary && <Description whiteText={rightNews} text={summary} />}
      </div>
    </Container>
  );
};

export default MainNews;
