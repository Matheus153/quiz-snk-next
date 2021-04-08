import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.colors.exploration};
      
      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.exploration};
      }

      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.exploration};
      }
    }
    &:focus {
      opacity: 1;
    } 
  }

  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;
