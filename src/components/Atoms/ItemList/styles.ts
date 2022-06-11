import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  span {
    width: 5%;
    display: block;
    &:before {
      content: '';
      height: 8px;
      width: 8px;
      background-color: #900;
      border-radius: 50%;
      display: block;
    }
  }

  a {
    width: 95%;
    color: #900;
    text-decoration: none;
  }
`;
