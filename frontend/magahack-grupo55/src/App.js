import React from 'react';
import Header from "./components/header/index"
import Body from "./components/body/index"
import { Container } from "./components/App/styled"

const dataMock = [
{
  id: "1",
  picture: "1",
  description: "Quero crescer com um Site Online"
},
{
  id: "2",
  picture: "2",
  description: "Quero crescer no Instagram"
},
{
  id: "3",
  picture: "3",
  description: "Quero crescer no Facebook"
}
]

function App() {
  return (
    <Container>
        <Header/>
        <Body data={dataMock}/>
    </Container>
  );
}

export default App;
