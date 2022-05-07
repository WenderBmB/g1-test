import React from 'react';
import { Container } from './styles';

interface IVideoTime {
  text: string;
}

const VideoTime: React.FC<IVideoTime> = ({ text }) => {
  return <Container>{text}</Container>;
};

export default VideoTime;
