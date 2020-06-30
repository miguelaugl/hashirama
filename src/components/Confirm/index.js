import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

import Screen from '../Screen';
import { Container } from './styles';
import Header from '../Header';
import Input from '../Input';
import Button from '../Button';

export default function Confirm() {
  return (
    <Screen>
      <Header linkTo="/address" />

      <Container>
        <div>
          <Input value="Fontes  Iguaçu nº 366"/>
          <p>
            <FaMapMarkerAlt color="FF0000" size={20} />
          </p>
        </div>
        <Button text="Confirmar localização" linkTo="/thank-you"/>
      </Container>
    </Screen>
  )
}
