import React from 'react';
import { FaChevronDown, FaPlus, FaMinus } from 'react-icons/fa';

import Screen from '../Screen';
import { Container } from './styles';
import Header from '../Header';
import Input from '../Input';
import Button from '../Button';

import temakiImg from '../../assets/temaki-salmao.jpg';

export default function Details() {
  return (
    <Screen>
      <Header linkTo="/dashboard" />

      <Container>
        <section>
          <h2><FaChevronDown color="#FF0C0C" size={18} />Detalhes do Item</h2>

          <img src={temakiImg} alt="Temaki"/>

          <strong>3. Temaki Salmão</strong>

          <p className="description">Arroz com Salmão e sementes de gergelim enrolado em alga.</p>

          <h3>Observações:</h3>

          <Input style={{ backgroundColor: '#FFF' }}/>

          <div>
            <FaPlus className="plus" color="#FF0C0C"/>
            <FaMinus className="minus" />
            <Input value={1} style={{ backgroundColor: '#FFF' }} />
            <Button text="Adicionar" linkTo="/bag "/>
          </div>
        </section>
      </Container>
    </Screen>
  )
}
