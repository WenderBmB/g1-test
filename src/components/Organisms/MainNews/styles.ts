import styled from 'styled-components';
import { sizeScreen } from '../../../utils/NormalizedStyles';

interface ContainerProps {
  img?: string;
}

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
  background: url(${(props) => props.img}) no-repeat;
  background-size: 100% 100%;

  @media screen and (min-width: ${sizeScreen.md}) {
    width: 45%;
    height: 276px;
  }

  @media screen and (min-width: ${sizeScreen.lg}) {
    width: 45%;
    height: 426px;
  }
`;
