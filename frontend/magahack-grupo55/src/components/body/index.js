import React from "react";
import { StyledBody, CardContainer } from "./styled";
import Card from "../Card/index"

function Body() {
  return (
    <StyledBody>
      <h3>
        Informações essenciais para o crescimento da sua empresa ONLINE reunidas
        em um só lugar
      </h3>
      <CardContainer>
        <Card/>
        <Card/>
        <Card/>
      </CardContainer>  
    </StyledBody>
  );
}

export default Body;
