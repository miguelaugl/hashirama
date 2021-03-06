import styled from 'styled-components';

import backgroundImage from '../../assets/sushi-background.png';

export const Container = styled.div`
  & {
    background-image: url(${backgroundImage});
    padding: 20px 32px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    color: #fff;
    font-size: 24px;
    font-weight: bolder;
  }

  img {

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
