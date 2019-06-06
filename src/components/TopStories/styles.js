import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  button.btn.btn-link {
    color: #000;
  }
  div.card-body {
    background-color: #414141;
  }
`;

export const ListComments = styled.ul`
  margin: 10px 10px 10px 25px;
`;

export const Title = styled.h1`
  font-size: 48px;
`;
