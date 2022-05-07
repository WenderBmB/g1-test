import styled from 'styled-components';

export const Container = styled.div`
  width: 624px;
  height: 185px;
  display: flex;

  & > div {
    margin-left: 10px;

    h1 {
      margin: 5px 0 0 0;
    }

    div:last-child {
      height: max-content;
      margin: 0;
      display: flex;
      align-items: center;

      p {
        margin: 5px 2px 0 2px;
      }
    }
  }
`;
