import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import styled from 'styled-components';

import headerLogoImg from '../../assets/header-logo.png';

const HeaderStyled = styled.header`
  width: 100%;
  height: 70px;
  padding: 10px;
  background: #F5F5F9;

  display: flex;
  align-items: center;

  img {
    position: absolute;
    left: calc(50% - 151px / 2);
  }

  a {
    display: flex;
    transition: transform .2s;

    &:hover {
      transform: translateX(-5px);
    }
  }
`;

export default function Header({ linkTo }) {
  return (
    <HeaderStyled>
      <Link to={linkTo}>
        <FaChevronLeft color="#000" size={24} />
      </Link>

      <img
        src={headerLogoImg}
        alt="Logo Hashiraram Japanese Food"
      />
    </HeaderStyled>
  )
}
