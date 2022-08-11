import styled from 'styled-components';

export const Container = styled.div`
  width: 30vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 30px 0;
  border: 1px solid black;

  article {
    display: flex;
    justify-content: space-around;
  }

  input {
    width: 30%;
    text-align: center;
  }

  button {
    width: 20%;
  }
`;

export const Box = styled.div``;
