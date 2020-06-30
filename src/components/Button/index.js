import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: 100%;
  height: 50px;
  background: #ED3238;
  border-radius: 5px;
  color: #FFFFFF;
  padding: 1rem;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;

`;

export default function Button({ text, linkTo }) {
  const history = useHistory();

  function navigateTo() {
    history.push(linkTo);
  }

  return (
    <ButtonStyled onClick={navigateTo}>
      {text}
    </ButtonStyled>
  )
}
