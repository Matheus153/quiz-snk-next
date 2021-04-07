import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 100%;
  
  // pressetes abaixo deixam o quiz no canto superior esquerdo
  max-width: 350px;
  padding-top: 45px;
  margin: auto 38%; 
  min-height: 100vh; 
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
    min-height: 92vh;
  }
`;

export default StyledContainer