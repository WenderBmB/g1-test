import React from 'react';
import { formatDistance } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';
import { Container } from './styles';

interface ITimeAgoFontNews {
  duration: string;
}

const TimeAgoFontNews: React.FC<ITimeAgoFontNews> = ({ duration }) => {
  const today = new Date();
  today.setHours(today.getHours() - 3);

  const dateTime = new Date(duration);

  const date = formatDistance(dateTime, today, {
    addSuffix: true,
    locale: ptBR,
  });
  return <Container>{date}</Container>;
};

export default TimeAgoFontNews;
