import React from 'react';

import { Container } from './styles';

interface IVideoModal {
  font: string;
}

const VideoModal: React.FC<IVideoModal> = ({ font }) => {
  return (
    <Container controls>
      <source src={font} />
    </Container>
  );
};

export default VideoModal;
