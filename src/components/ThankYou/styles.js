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
  }

  img {
    margin-top: 1rem;
  }

  h1 {
    color: #fff;
    font-size: 20px;
    margin: 20px 0;
  }

  div {
    width: 100%;
  }

  hr {
    height: 12px;
    background: #64F373;
    border-radius: 10px;
    animation: loading 3s;
  }

  @keyframes loading {
    from {
      width: 0;
    } to {
      width: 100%;
    }
  }
`;
