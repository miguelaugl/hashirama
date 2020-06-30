import styled from 'styled-components';

import backgroundImage from '../../assets/login-background.png';

export const Container = styled.div`
  & {
    background-image: url(${backgroundImage});
    padding: 84px 32px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  & > div {
    width: 100%;

    a {
      display: block;
      text-align: center;
      color: #FFF;
    }
  }
`;
