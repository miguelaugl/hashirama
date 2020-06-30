import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.png';

import Screen from '../Screen';
import { Container } from './styles';
import Input from '../Input';
import Button from '../Button';

export default function Login() {
  return (
    <Screen>
      <Container>
        <img
          src={logoImg}
          alt="Logo Hashirama Japanese Food"
        />

        <div>
          <Input placeholder="usuário" />

          <Input placeholder="senha" />
        </div>

        <div>
          <Button text="Login" linkTo="/dashboard" />

          <Link to="/register">
            Ainda não possui cadastro?
          </Link>
        </div>
      </Container>
    </Screen>
  )
}
