import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import logoImg from '../../assets/logo.png';

import Screen from '../Screen';

const logoStyles = {
  position: 'absolute',
  top: 'calc(50% - 55px)',
  left: 'calc(50% - 249px / 2)',
}

export default function Splash() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/login');
    }, 3500);
  }, [history]);

  return (
    <Screen>
      <img
        src={logoImg}
        alt="Logo Hashirama Japanese Food"
        style={logoStyles}
      />
    </Screen>
  )
}
