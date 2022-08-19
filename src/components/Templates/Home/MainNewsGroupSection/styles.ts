import styled from 'styled-components';
import { sizeScreen } from '../../../../utils/NormalizedStyles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: ${sizeScreen.md}) {
    flex-direction: row;
  }
`;
