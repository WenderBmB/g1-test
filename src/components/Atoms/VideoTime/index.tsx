import React from 'react';
import { Container } from './styles';

interface IVideoTime {
  duration: number;
}

const VideoTime: React.FC<IVideoTime> = ({ duration }) => {
  const time = duration;
  const minutes = Math.floor(time / 6000);

  return <Container>{minutes} min</Container>;
};

export default VideoTime;
