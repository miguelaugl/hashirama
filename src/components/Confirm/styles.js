import styled from 'styled-components';

import backgroundImage from '../../assets/google-maps.png';

export const Container = styled.div`
  & {
    background-image: url(${backgroundImage});
    background-size: cover;
    padding: 20px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  div {
    width: 100%;
    position: relative;
  }

  input {
    font-size: 1rem;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.25);
  }

  p:before {
    content: '';
    position: absolute;
    top: calc(50% - 40px / 2);
    right: 3rem;
    width: 1px;
    height: 25px;
    background: #BFBFBF;
  }

  svg {
    position: absolute;
    top: 15px;
    right: 1rem;
  }
`;
