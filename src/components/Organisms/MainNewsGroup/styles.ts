import styled from 'styled-components';
import { size } from '../MainNews/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media screen and (min-width: ${size.md}) {
    flex-direction: row;
  }
`;
