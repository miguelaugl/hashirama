import styled from 'styled-components';

import backgroundImage from '../../assets/sushi-background.png';

export const Container = styled.div`
  & {
    background-image: url(${backgroundImage});
    padding: 20px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }


  h2 {
    position: relative;
    color: #fff;
    font-size: 23px;
    margin: 3rem 0 2rem 0;

    svg {
      position: absolute;
      top: -2rem;
      transition: transform .4s;
    }

    svg:hover {
      transform: translateY(5px);
    }
  }

  label {
    position: relative;
    color: #fff;
    font-weight: bold;
    display: block;

    img {
      position: absolute;
      right: 1rem;
      top: calc(50% - 25px / 2);
    }
  }

  div {
    width: 100%;
    margin-bottom: 1rem;

    display: flex;
    justify-content: space-between;

    label {
      width: 100%;
      max-width: 140px;
      font-size: 12px;

      img {
        top: calc(50% - 10px / 2);
        right: 0;
        border-radius: 5px;
        cursor: pointer;
      }
    }

    input {
      width: 100%;
      padding: 5px 18px;
      background: #F5F5F9;
      border-radius: 5px;
      border: 1px solid #f5f5f9;

      &:hover, &:focus {
        border-color: #000;
      }
    }
  }
`;
