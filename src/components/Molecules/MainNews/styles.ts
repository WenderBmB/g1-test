import styled, { css } from 'styled-components';

interface ContainerProps {
  hasImg: boolean;
  img?: string;
}

export const Container = styled.div<ContainerProps>`
  width: 464px;
  height: 426px;
  box-shadow: 2px 2px 10px #e1e1e1;
  box-sizing: border-box;
  padding: 12px 30px 15px 20px;

  ${(props) =>
    props.hasImg &&
    css`
      background-size: 100% 100%;
      background-image: url(${props.img});

      p {
        display: none;
      }
      h1 {
        color: #ffffff;
        margin-bottom: 15px;
        position: absolute;
        bottom: 0px;
      }
    `}
`;
