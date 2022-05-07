import styled, { css } from 'styled-components';

interface ContainerProps {
  haveImg?: boolean;
}

export const Container = styled.h1<ContainerProps>`
  font-family: 'Open Sans';
  font-size: 40px;
  font-weight: 700;
  color: #c4170c;

  ${(props) =>
    props.haveImg &&
    css`
      color: #ffffff;
    `}
`;
