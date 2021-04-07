import styled from 'styled-components'

const QuizBackground = styled.div`
  width: 100%;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  background-image: url(${({backgroundImage}) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;
  @media screen and (max-width: 500px) {
    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 150px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;