import React, { useMemo } from 'react';
import HeaderBar from '../../Molecules/HeaderBar';
import { IMainNews } from '../../Organisms/MainNews';
import MainNewsGroupSection from './MainNewsGroupSection';

interface IHomeTemplate {
  mainNews: IMainNews[];
}

const HomeTemplate: React.FC<IHomeTemplate> = ({ mainNews }) => {
  // estudar useMemo
  const getMainNews = useMemo(() => {
    return [mainNews[0], mainNews[1]];
  }, [mainNews]);
  return (
    <div>
      <HeaderBar />
      <MainNewsGroupSection mainNews={getMainNews} />
    </div>
  );
};

export default HomeTemplate;
