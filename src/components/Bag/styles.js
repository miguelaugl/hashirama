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

  & > div {
    width: 100%;
    height: 100%;
    background: #F5F5F9;
    border-radius: 20px 20px 0 0;
    padding: 20px 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    section {
      width: 100%;
      padding: 0 20px;

      div {
        display: flex;
        justify-content: space-between;

        &.coupon {
          font-size: 20px;
        }
      }

      b {
        font-size: 20px;
      }

      strong {
        color: #ED3238;
        cursor: pointer;
      }

      img {
        margin-left: 15px;
      }

      button {
        margin-top: 1.5rem;
      }
    }

    h2 {
      position: relative;

      svg {
        position: absolute;
        top: calc(50% - 20px / 2);
        left: -6rem;
        transition: transform .4s;
      }

      svg:hover {
        transform: translateY(5px);
      }
    }

    hr {
      width: 100%;
      height: 1px;
      background: #000;
      margin: 1rem;
    }
  }
`;
