import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

import Screen from '../Screen';
import { Container } from './styles';
import Header from '../Header';
import Button from '../Button';

import couponImg from '../../assets/coupon.png';

export default function Bag() {
  return (
    <Screen>
      <Header linkTo="/dashboard" />

      <Container>
        <div>
          <h2><FaChevronDown color="#FF0C0C" size={18} />Sacola</h2>

          <hr />

          <section>
            <div>
              <p>Subtotal</p>
              <p>R$ 0,00</p>
            </div>

            <div>
              <p>Taxa de entrega</p>
              <p>R$ 0,00</p>
            </div>

            <div>
              <b>Total</b>
              <b>R$ 0,00</b>
            </div>
          </section>

          <hr />

          <section>
            <b>Pagamento</b>

            <div>
              <p>Dinheiro</p>
              <strong>Escolher</strong>
            </div>

            <div>
              <p>Cartão</p>
              <strong>Escolher</strong>
            </div>
          </section>

          <hr />

          <section>
            <div className="coupon">
              <p>Cupom</p>
              <strong>Adicionar</strong>
            </div>

            <img src={couponImg } alt="Cupom de disconto" />
          </section>

          <hr />

          <section>
            <div>
              <p>Tempo de entrega</p>
              <p>50 min</p>
            </div>

            <Button text="Fazer pedido" linkTo="/credit-card"/>
          </section>
        </div>
      </Container>
    </Screen>
  )
}
