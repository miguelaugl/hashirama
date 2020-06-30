import styled from 'styled-components';

export const Container = styled.div`
  & {
    height: 570px;
    background: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .carousel {
    & {
      padding: 10px 18px;
      width: 100%;
      overflow: auto;
      background: #ED3238;
    }

    &::-webkit-scrollbar {
      color: #000;
      height: 4px;
    }

    &::-webkit-scrollbar-thumb:horizontal {
      background: #000;
      border-radius: 2px;
    }

    h2 {
      color: #fff;
      font-size: 15px;
      font-weight: normal;
    }

    ul {
      & {
        display: flex;
      }

      a {
        text-decoration: none;

        & + a {
          margin-left: 5px;
        }
      }

      li {
        & {
          transition: opacity .4s;

          display: flex;
          flex-direction: column;
          align-items: center;
        }

        &:hover {
          opacity: .9;
        }

        img {
          border: 2px solid #fff;
          width: 85px;
          height: 85px;
        }

        p {
          color: #fff;
          font-size: 12px;
        }
      }
    }
  }

  .our-plates {
    & {
      width: 100%;
      height: 100%;
      padding: 10px 18px;
      flex: 1;
      overflow: auto;

      &::-webkit-scrollbar {
      color: #000;
      width: 4px;
    }

    &::-webkit-scrollbar-thumb:vertical {
      background: #000;
      border-radius: 2px;
    }
    }

    h2 {
      color: #000;
      font-size: 15px;
      font-weight: normal;
      margin-bottom: 10px;
    }

    ul {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 15px;

      li {
        & {
          width: 150px;
          height: 215px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        div {
          padding: 0 10px 6px;

          .plate-name, .plate-name-japanese {
            & {
              text-align: right;
              font-size: 8px;
              font-weight: bold;
              color: #000;
            }
          }

          .no-discount-price {
            font-size: 8px;
            text-decoration-line: line-through;
          }

          .discount-price {
            font-size: 8px;
            font-weight: bold;

            display: flex;
            b {
              line-height: 16px;
              font-size: 15px;
            }
          }
        }

        button {
          width: 100%;
          height: 45px;
          background: #000;

          display: flex;
          justify-content: center;
          align-items: center;

          svg {
            margin-left: 1rem;
          }

          a {
            width: 100%;
            height: 100%;
            color: #fff;
            text-decoration: none;

            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
`;
