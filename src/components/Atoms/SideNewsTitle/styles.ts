import styled, { css } from 'styled-components';
import { size } from '../../Organisms/MainNews/styles';

export const Container = styled.h3`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.72px;
  /* font-size: 24px;
  line-height: 28px;
  letter-spacing: -1.245px; */
  color: #c4170c;

  @media screen and (min-width: ${size.sm}) {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -1.245px;
  }
`;
