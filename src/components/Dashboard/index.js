import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

import sushiImg from '../../assets/sushi.png';
import temakiImg from '../../assets/temaki.png';
import sashimiImg from '../../assets/sashimi.png';
import ramenImg from '../../assets/ramen.png';

import Screen from '../Screen';
import { Container } from './styles';
import Header from '../Header';

const platesCarousel = [
  {
    id: Math.random(),
    image: sushiImg,
    name: 'Sushi',
  },
  {
    id: Math.random(),
    image: sashimiImg,
    name: 'Sashimi',
  },
  {
    id: Math.random(),
    image: temakiImg,
    name: 'Temaki',
  },
  {
    id: Math.random(),
    image: ramenImg,
    name: 'Ramen',
  },
  {
    id: Math.random(),
    image: sushiImg,
    name: 'Sushi',
  },
  {
    id: Math.random(),
    image: sashimiImg,
    name: 'Sashimi',
  },
  {
    id: Math.random(),
    image: temakiImg,
    name: 'Temaki',
  },
  {
    id: Math.random(),
    image: ramenImg,
    name: 'Ramen',
  },
];

const ourPlates = [
  {
    id: Math.random(),
    image: ramenImg,
    name: 'Ramen',
    japaneseName: '日本のひよこ',
    noDiscountPrice: '72,99',
    discountPrice: <p className="discount-price">R$<b>59</b>,99</p>,
  },
  {
    id: Math.random(),
    image: sushiImg,
    name: 'Sushi',
    japaneseName: '日本のひよこ',
    noDiscountPrice: '72,99',
    discountPrice: <p className="discount-price">R$<b>59</b>,99</p>,
  },
  {
    id: Math.random(),
    image: sashimiImg,
    name: 'Sashimi',
    japaneseName: '日本のひよこ',
    noDiscountPrice: '72,99',
    discountPrice: <p className="discount-price">R$<b>59</b>,99</p>,
  },
  {
    id: Math.random(),
    image: temakiImg,
    name: 'Temaki',
    japaneseName: '日本のひよこ',
    noDiscountPrice: '72,99',
    discountPrice: <p className="discount-price">R$<b>59</b>,99</p>,
  },
  {
    id: Math.random(),
    image: ramenImg,
    name: 'Ramen',
    japaneseName: '日本のひよこ',
    noDiscountPrice: '72,99',
    discountPrice: <p className="discount-price">R$<b>59</b>,99</p>,
  },
  {
    id: Math.random(),
    image: sushiImg,
    name: 'Sushi',
    japaneseName: '日本のひよこ',
    noDiscountPrice: '72,99',
    discountPrice: <p className="discount-price">R$<b>59</b>,99</p>,
  },
  {
    id: Math.random(),
    image: sashimiImg,
    name: 'Sashimi',
    japaneseName: '日本のひよこ',
    noDiscountPrice: '72,99',
    discountPrice: <p className="discount-price">R$<b>59</b>,99</p>,
  },
  {
    id: Math.random(),
    image: temakiImg,
    name: 'Temaki',
    japaneseName: '日本のひよこ',
    noDiscountPrice: '72,99',
    discountPrice: <p className="discount-price">R$<b>59</b>,99</p>,
  },
]

export default function Dashboard() {
  return (
    <Screen>
      <Header linkTo="/login" />

      <Container>
        <div className="carousel">
          <h2>Recomendados para você: </h2>
          <ul>
            {platesCarousel.map(prato => (
              <Link to="/details">
                <li key={prato.id}>
                  <img src={prato.image} alt={prato.name}/>
                  <p>{prato.name}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="our-plates">
          <h2>Nossos pratos: </h2>
          <ul>
            {ourPlates.map(plate => (
              <li>
                <img src={plate.image} alt="" />

                <div>
                  <p className="plate-name">{plate.name}</p>
                  <p className="plate-name-japanese">{plate.japaneseName}</p>

                  <p className="no-discount-price">R${plate.noDiscountPrice}</p>
                  <p className="discount-price">{plate.discountPrice}</p>
                </div>


                <button>
                  <Link to="/details">
                    Adicionar <FaShoppingCart color="#fff" size={16} />
                  </Link>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Screen>
  )
}
