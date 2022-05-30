import React from 'react';
import {
  CloseButton,
  Content,
  Header,
  ModalWrap,
  OverLay,
  ModalFooter,
} from './styles';
import { IModalProps } from './types';

const Modal: React.FC<IModalProps> = ({
  children,
  headerContent,
  footerContent,
  handleShowModal,
  showModal,
}) => {
  return (
    <>
      <OverLay hidden={showModal}>
        <ModalWrap>
          <Header>{headerContent && headerContent}</Header>

          <Content>
            <CloseButton onClick={handleShowModal}>x</CloseButton>
            {children}
          </Content>
          {footerContent && <ModalFooter>{footerContent}</ModalFooter>}
        </ModalWrap>
      </OverLay>
    </>
  );
};

export default Modal;
