import React from 'react';
import { GlobalStyle } from './styles/global';
import { Wrapper, Container, Content } from './styles/components';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Container>
        <Content>
          <Header />
          <Routes />
        </Content>
      </Container>
    </Wrapper>
  );
}

export default App;
