import React from 'react';
import { Container } from './styles';

interface INewsGroup {
  text: string;
}

const NewsGroup: React.FC<INewsGroup> = ({ text }) => {
  return <Container>{text}</Container>;
};

export default NewsGroup;
