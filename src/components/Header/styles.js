import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 0;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  width: 175px;
  padding: 6px 7px 6px 0;
  font-size: 22px;
  font-weight: 700;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  img {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;
