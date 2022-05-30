import styled, { css } from 'styled-components';

interface ContainerProps {
  hasImg: boolean;
  img?: string;
}

export const size = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
};

export const Container = styled.div<ContainerProps>`
  /* width: 464px; */
  width: 100%;
  height: 276px;
  box-shadow: 0px 4px 4px #e1e1e1;
  box-sizing: border-box;
  padding: 12px 30px 15px 20px;
  display: flex;
  flex-direction: column;
  justify-content: end;

  @media screen and (min-width: ${size.md}) {
    width: 45%;
    height: 276px;
  }

  @media screen and (min-width: ${size.lg}) {
    width: 45%;
    height: 426px;
  }
`;
