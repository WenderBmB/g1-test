import styled, { css } from 'styled-components';

interface ModalProps {
  clicked: boolean;
}

export const Container = styled.div<ModalProps>`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(0, 0, 0, 0.9);

  button {
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px 20px 0 0;
  }

  ${(props) =>
    props.clicked &&
    css`
      display: flex;
    `}
`;

export const Content = styled.div`
  background-color: transparent;
  padding: 20px;
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 38px;
    color: #ffffff;
  }
`;
