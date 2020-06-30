import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 50px;
  background: #F5F5F9;
  border: 1px solid #f5f5f9;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;

  &::placeholder {
    color: #000;
  }

  &:hover, &:focus {
    border-color: #000;
  }
`;

export default Input;
