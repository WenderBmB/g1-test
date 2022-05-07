import React from 'react';
import { Container } from './styles';

interface INewsTime {
  text: string;
}

const NewsTime: React.FC<INewsTime> = ({ text }) => {
  return <Container>{text}</Container>;
};

export default NewsTime;
