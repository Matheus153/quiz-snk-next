import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
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
  }

  img {
    margin-top:20px;
  }
`;

export default QuizContainer;
