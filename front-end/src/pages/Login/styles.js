import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > form {
    height: 60vh;
    width: 60vw;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    border: 1px solid black;
  }
`;

export default Container;
