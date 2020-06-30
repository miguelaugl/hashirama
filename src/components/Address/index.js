import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

import Screen from '../Screen';
import { Container } from './styles';
import Header from '../Header';
import Button from '../Button';

export default function Address() {
  return (
    <Screen>
      <Header linkTo="/credit-card" />

      <Container>
        <section>
          <h2><FaChevronDown color="#FF0C0C" size={18} />Entrega</h2>

          <ul>
            <li>
              <Link to="/confirm">
                <div>
                  Alameda Iguaçu <p>nº 366</p>
                </div>
                <FaChevronRight color="#FF0C0C" size={12} />
              </Link>
            </li>

            <li>
              <Link to="/confirm">
                <div>
                  Av. Orvalho de Carlavo <p>nº 512</p>
                </div>
                <FaChevronRight color="#FF0C0C" size={12} />
              </Link>
            </li>

            <li>
              <Link to="/confirm">
                <div>
                  Rua Tiradente Silvestre <p>nº 211</p>
                </div>
                <FaChevronRight color="#FF0C0C" size={12} />
              </Link>
            </li>
          </ul>
        </section>

        <div>
          <Button text="Adicionar novo endereço" linkTo="/confirm"/>
        </div>
      </Container>
    </Screen>
  )
}
