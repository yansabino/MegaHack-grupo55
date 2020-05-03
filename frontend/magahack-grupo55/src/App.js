import React from 'react';
import Header from "./components/header/index"
import Body from "./components/body/index"
import { Container } from "./components/App/styled"

function App() {
  return (
    <Container>
        <Header/>
        <Body/>
    </Container>
  );
}

export default App;
