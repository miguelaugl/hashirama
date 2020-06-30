import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import temariImg from '../../assets/temari-thank-you.png';

import Screen from '../Screen';
import { Container } from './styles';
import Header from '../Header';

export default function ThankYou() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/dashboard');
    }, 5000);
  }, [history]);

  return (
    <Screen>
      <Header linkTo="/confirm" />

      <Container>
        <img
          src={temariImg}
          alt="Temari Joinha"
        />

        <h1>Confirmando o pedido...</h1>

        <div>
          <hr />
        </div>

        <h1>Pedido em preparação...</h1>

        <div>
          <hr />
        </div>

        <h1>Pedido saiu para entrega...</h1>

        <div>
          <hr />
        </div>
      </Container>
    </Screen>
  )
}
