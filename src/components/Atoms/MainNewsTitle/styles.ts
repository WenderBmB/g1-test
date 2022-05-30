import styled, { css } from 'styled-components';
import { size } from '../../Organisms/MainNews/styles';

interface ContainerProps {
  whiteText?: boolean;
}

export const Container = styled.h1<ContainerProps>`
  font-family: 'Open Sans';
  font-size: 20px;
  font-weight: 700;
  color: #c4170c;
  line-height: 24px;
  letter-spacing: -0.72px;

  ${(props) =>
    props.whiteText &&
    css`
      color: #ffffff;
      text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.8);
    `}

  @media screen and (min-width: ${size.sm}) {
    letter-spacing: -2.5px;
    font-size: 40px;
    line-height: 44px;
  }
`;
