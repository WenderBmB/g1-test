import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  cursor: pointer;
  border-bottom: 1px solid #c8c8c8;
`;

export const CardLeftContent = styled.div`
  width: 40%;
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
`;

export const CardRightContent = styled.div`
  width: 60%;
  padding: 0 20px;
`;

export const Thumb = styled.img`
  width: 100%;
  height: 95%;
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
