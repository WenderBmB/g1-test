import styled, { css } from 'styled-components';

interface ContainerProps {
  whiteText?: boolean;
}

export const Container = styled.span<ContainerProps>`
  font-family: 'Open Sans';
  font-style: normal;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  color: #333333;

  ${(props) =>
    props.whiteText &&
    css`
      color: #ffffff;
      text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.8);
    `}
`;
