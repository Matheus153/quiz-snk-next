import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 15px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: black;
  background-color: #d5d3d5;
  border-radius: 5px;
  outline: 0;
  margin-bottom: 25px;
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(0, 0, 0, 0.5);
    opacity: 1; /* Firefox */
  }

`;

export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase
        placeholder={placeholder}
        onChange={onChange}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
