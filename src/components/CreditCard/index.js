import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

import Screen from '../Screen';
import { Container } from './styles';
import Header from '../Header';
import Input from '../Input';
import Button from '../Button';

import visaImg from '../../assets/credit-card-visa.png';
import interrogationImg from '../../assets/interrogation.png';

export default function CreditCard() {
  return (
    <Screen>
      <Header linkTo="/bag" />

      <Container>
        <section>

        <h2>
          <FaChevronDown color="#FF0C0C" size={18} />Dados do titular do cartão
        </h2>

        <label htmlFor="">
          Número do cartão
          <Input value="5432 8753 1234 5678" />
          <img src={visaImg} alt="Cartão de crédito" />
        </label>

        <div>
          <label htmlFor="">
            Validade
            <input placeholder="dd/mm/aa" />
          </label>

          <label htmlFor="">
            Código de segurança
            <input placeholder="CVV" />
            <img src={interrogationImg} alt="Dúvidas?"/>
          </label>
        </div>

        <label htmlFor="">
          Nome do titular do cartão
          <Input value="Bruno L S Vieira" />
        </label>

        </section>

        <Button text="Cadastrar" linkTo="/address"/>
      </Container>
    </Screen>
  )
}
