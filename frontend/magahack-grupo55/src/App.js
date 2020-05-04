import React from 'react';
import Header from "./components/header/index"
import Body from "./components/body/index"
import { Container } from "./components/App/styled"


const cardMock = [
{
  id: "1",
  picture: "https://image.flaticon.com/icons/svg/1336/1336494.svg",
  description: "Quero crescer com um Site Online"
},
{
  id: "2",
  picture: "https://image.flaticon.com/icons/svg/1384/1384031.svg",
  description: "Quero crescer no Instagram"
},
{
  id: "3",
  picture: "https://image.flaticon.com/icons/svg/1051/1051360.svg",
  description: "Quero crescer no Facebook"
}
]

function App() {
  return (
    <Container>
        <Header/>
        <Body cards={cardMock}/>
    </Container>
  );
}

export default App;
