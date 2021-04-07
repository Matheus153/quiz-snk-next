import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid rgba(31, 29, 29, 0.8); 
  background-color: rgba(31, 29, 29, 0.93);
  box-shadow: -11px 11px 21px -4px rgba(0,0,0,0.75);
  -webkit-box-shadow: -11px 11px 21px -4px rgba(0,0,0,0.75);
  -moz-box-shadow: -11px 11px 21px -4px rgba(0,0,0,0.75);
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;

  h1, h2, h3 {
    font-size: 1.7em;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  h4 {
    font-size: 1.3em;
    text-align: center;
  }

  h5 {
    font-size: 1.1em;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5em;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 32px;
  background-color: ${({ theme }) => theme.colors.exploration};
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  text-shadow: -2px 2px 1px rgba(10, 10, 10, .8);
  text-align: center;
  line-height: 1.4em;
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }

`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.primary};;
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: 4px;
  transition: .25s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .6;
    transform: translateX(10px);
  }
`;

export default Widget;
