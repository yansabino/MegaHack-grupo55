import React from 'react';
import Header from "./components/header/index"
import Body from "./components/body/index"
import { Container } from "./components/App/styled"
import {withRouter} from 'react-router-dom';



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

function App(props) {
  console.log(props)
  const menuMock = [
    {
      label: "HOME",
      command: () => props.history.push("/")
    },
    {
      label: "QUEM SOMOS",
      command: () => props.history.push("/about")
    },
    {
      label: "POR ONDE COMEÇAR",
      command: () => props.history.push("/")
    },
  ]
  return (
    <Container>
        <Header menu={menuMock}/>
        <Body cards={cardMock}/>
    </Container>
  );
}

export default withRouter(App);
