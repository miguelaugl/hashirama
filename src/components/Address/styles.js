import styled from 'styled-components';

import backgroundImage from '../../assets/sushi-background.png';

export const Container = styled.div`
  & {
    background-image: url(${backgroundImage});
    padding: 16px 0 12px 0;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  & > section {
    width: 100%;
    height: 400px;
    background: #F5F5F9;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      position: relative;
      margin-bottom: 2rem;

      svg {
        position: absolute;
        top: calc(50% - 20px / 2);
        left: -7rem;
        transition: transform .4s;
      }

      svg:hover {
        transform: translateY(5px);
      }
    }

    ul {
      width: 100%;
      display: flex;
      flex-direction: column;

      li {
        display: flex;
        padding: 10px 15px;
        background: #FFF;
        border-radius: 5px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        transition: filter .4s;
        cursor: pointer;

        & + li {
          margin-top: 12px;
        }

        &:hover {
          & {
            filter: brightness(.95);
          }

          svg {
            transform: translateX(5px);
          }
        }

        a {
          width: 100%;
          color: #000;
          text-decoration: none;

          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        div {
          display: flex;
          align-items: center;

          p {
            margin-left: 5px;
            font-size: 12px;
          }
       }

       svg {
          transition: transform .4s;
        }
      }
    }
  }

  & > div {
    padding: 0 20px;
    width: 100%;
  }
`;
