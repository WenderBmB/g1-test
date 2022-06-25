import styled from 'styled-components';
import { sizeScreen } from '../../../utils/NormalizedStyles';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-bottom: 1px solid #c8c8c8;

  @media screen and (min-width: ${sizeScreen.md}) {
    flex-direction: row;
  }
`;

export const CardLeftContent = styled.div`
  width: 100%;
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    z-index: 1;
    bottom: 70px;
    left: 24px;

    span {
      margin-left: 5px;
    }
  }
  @media screen and (min-width: ${sizeScreen.md}) {
    width: 270px;
    height: 152px;
  }
`;

export const CardRightContent = styled.div`
  width: 100%;
  padding: 0 20px;

  @media screen and (min-width: ${sizeScreen.md}) {
    width: calc(270-100%);
  }
`;

export const Thumb = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const SideNewsModalTitle = styled.div`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
  color: #ffffff;
`;
