import React from 'react';
import { Link } from 'react-router-dom';

import temariImg from '../../assets/temari-thank-you.png';

import Screen from '../Screen';
import { Container } from './styles';
import Header from '../Header';
import Input from '../Input';
import Button from '../Button';

export default function Register() {
  return (
    <Screen>
      <Header linkTo="/login" />

      <Container>
        <h1>Quase lá!</h1>

        <img
          src={temariImg}
          alt="Temari Joinha"
        />

        <div>
          <Input placeholder="digite seu usuário" />

          <Input placeholder="digite seu senha" />

          <Input placeholder="telefone" />
        </div>

        <div>
          <Button text="Ir para o pedido" />

          <Link path="/login">
            Voltar para o login
          </Link>
        </div>
      </Container>
    </Screen>
  )
}
