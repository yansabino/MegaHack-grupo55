import React from "react";
import Header from "../../components/header/index";
import Body from "../../components/body/index";
import { Container } from "../../components/App/styled";



function Main(props) {
  console.log(props);
 
  return (
    <Container>
      <Header history={props.history}/>
      <Body />
    </Container>
  );
}

export default Main;
