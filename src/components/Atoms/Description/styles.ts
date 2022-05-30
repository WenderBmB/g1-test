import styled, { css } from 'styled-components';

interface ContainerProps {
  whiteText?: boolean;
}

export const Container = styled.p<ContainerProps>`
  font-family: 'Open Sans';
  font-style: normal;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.8px;
  color: #000000;

  ${(props) =>
    props.whiteText &&
    css`
      color: #ffffff;
      text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.8);
    `}
`;
