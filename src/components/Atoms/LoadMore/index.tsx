import React from 'react';
import { Container } from './styles';

interface ILoadMore {
  onClick: () => void;
}

const LoadMore: React.FC<ILoadMore> = ({ onClick }) => {
  return <Container onClick={onClick}>VEJA MAIS</Container>;
};

export default LoadMore;
