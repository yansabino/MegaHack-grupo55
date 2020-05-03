import React from "react";
import { StyledBody, CardContainer } from "./styled";
import Card from "../Card/index"

function Body(props) {
  const cardList = props.data.map((card) => {
    return <Card picture={card.picture} description={card.description}/>
  })

  return (
    <StyledBody>
      <h3>
        Informações essenciais para o crescimento da sua empresa ONLINE reunidas
        em um só lugar
      </h3>
      <CardContainer>
        {cardList}
      </CardContainer>  
    </StyledBody>
  );
}

export default Body;
