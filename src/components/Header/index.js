import React from 'react';

import { Container, Title, User } from './styles';

const Header = () => (
  <Container>
    <Title>HackerNews</Title>
    <User>
      <img src="https://avatars0.githubusercontent.com/u/18350586?v=4" alt="" />
      Alberto Lacerda
    </User>
  </Container>
);

export default Header;
