import React from 'react';
import { formatDistance, format } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';
import { zonedTimeToUtc } from 'date-fns-tz';
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
