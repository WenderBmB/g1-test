import React from 'react';
import { Container } from './styles';

export interface IGroup {
  content: IContent;
  type: string;
}

export interface IContent {
  section: string;
  summary: string;
  title: string;
  url: string;
}

const ItemList: React.FC<IGroup> = ({ content, type }) => {
  return (
    <Container>
      <span />
      <a href={content.url}>{content.title}</a>
    </Container>
  );
};

export default ItemList;
