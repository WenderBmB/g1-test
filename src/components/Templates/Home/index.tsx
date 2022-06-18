import React, { useMemo } from 'react';
import HeaderBar from '../../Molecules/HeaderBar';
import { IMainNews } from '../../Organisms/MainNews';
import { ISideNews } from '../../Organisms/SideNews/types';
import MainNewsGroupSection from './MainNewsGroupSection';
import SideNewsGroupSection from './SideNewsGroupSection';

interface IHomeTemplate {
  mainNews: IMainNews[];
  sideNews: ISideNews[];
}

const HomeTemplate: React.FC<IHomeTemplate> = ({ mainNews, sideNews }) => {
  // estudar useMemo
  const getMainNews = useMemo(() => {
    return [mainNews[0], mainNews[1]];
  }, [mainNews]);
  const getSideNews = useMemo(() => {
    return [sideNews[0], sideNews[1], sideNews[2], sideNews[3]];
  }, [sideNews]);
  return (
    <div>
      <HeaderBar />
      <MainNewsGroupSection mainNews={getMainNews} />
      <SideNewsGroupSection sideNews={getSideNews} />
    </div>
  );
};

export default HomeTemplate;
