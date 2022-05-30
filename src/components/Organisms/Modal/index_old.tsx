import React from 'react';
import CloseButtonModal from '../../Atoms/CloseButtonModal';
import SideNewsTitle from '../../Atoms/SideNewsTitle';
import VideoModal from '../../Molecules/VideoModal';
import { Container, Content } from './styles_old';

interface IModal {
  videoFont: string;
  clicked: boolean;
  title: string;
  closeModal: () => void;
}

const Modal: React.FC<IModal> = ({ videoFont, clicked, title, closeModal }) => {
  return (
    <Container clicked={clicked}>
      <CloseButtonModal click={closeModal} />
      <Content>
        <SideNewsTitle text={title} />
        <VideoModal font={videoFont} />
      </Content>
    </Container>
  );
};

export default Modal;
