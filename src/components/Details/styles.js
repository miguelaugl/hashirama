import styled from 'styled-components';

import backgroundImage from '../../assets/sushi-background.png';

export const Container = styled.div`
  & {
    background-image: url(${backgroundImage});
    padding: 16px 16px 0 16px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  & > section {
    width: 100%;
    height: 100%;
    background: #F5F5F9;
    border-radius: 20px 20px 0 0;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      position: relative;

      svg {
        position: absolute;
        top: calc(50% - 20px / 2);
        left: -2rem;
        transition: transform .4s;
      }

      svg:hover {
        transform: translateY(5px);
      }
    }

    img {
      max-width: 255px;
      border-radius: 5px;
      margin: 1rem 0;
    }

    strong {
      width: 100%;
    }

    p {
      margin-bottom: 1.5rem;
    }

    h3 {
      color: #736A6A;
      width: 100%;
      font-weight: normal;
    }

    div {
      position: relative;
      width: 100%;

      display: flex;

      svg {
        position: absolute;
        cursor: pointer;

        top: calc(50% - 35px / 2);
      }

      .plus {
        left: 10px;
      }

      .minus {
        left: 62px;
      }

      input {
        max-width: 90px;
        margin-right: 1rem;
        text-align: center;
        font-size: 1rem;
        font-weight: bold;
      }
    }
  }
`;
