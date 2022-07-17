import React, { useMemo, useState } from 'react';
import { IGroup } from '../../Atoms/ItemList';
import LoadMore from '../../Atoms/LoadMore';
import NewsGrouper from '../../Atoms/NewsGrouper';
import HeaderBar from '../../Molecules/HeaderBar';
import SideNews from '../../Organisms/SideNews';
import { IVideo } from '../../Organisms/SideNews/types';
import MainNewsGroupSection from './MainNewsGroupSection';
import SideNewsGroupSection from './SideNewsGroupSection';
import * as S from './styles';

export interface INews {
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
}
interface IHomeTemplate {
  news: INews[];
}

const HomeTemplate: React.FC<IHomeTemplate> = ({ news }) => {
  const getMainNews = useMemo(() => {
    return [news[0], news[1]];
  }, [news]);

  const getSideNews = useMemo(() => {
    const removeValFromIndex = [0, 1];
    const newsValue = news;

    for (let i = removeValFromIndex.length - 1; i >= 0; i -= 1)
      newsValue.splice(removeValFromIndex[i], 1);
    return newsValue;
  }, [news]);

  const [noOfElement, setnoOfElement] = useState(2);

  const slice = news.slice(0, noOfElement);

  const loadMore = () => {
    setnoOfElement(noOfElement + 2);
  };

  return (
    <S.Container>
      <HeaderBar />
      <MainNewsGroupSection mainNews={getMainNews} />
      <S.BottomContent>
        <S.LeftContent>
          {slice.map((item) => {
            return (
              <SideNews
                key={item.id}
                id={item.id}
                created={item.created}
                image={item.image}
                title={item.title}
                type={item.type}
                url={item.url}
                chapeu={item.chapeu}
                group={item.group}
                section={item.section}
                summary={item.summary}
                video={item.video}
              />
            );
          })}
          <LoadMore onClick={loadMore} />
          {/* <SideNewsGroupSection sideNews={getSideNews} /> */}
        </S.LeftContent>
        <S.RightContent>
          <NewsGrouper />
        </S.RightContent>
      </S.BottomContent>
    </S.Container>
  );
};

export default HomeTemplate;
