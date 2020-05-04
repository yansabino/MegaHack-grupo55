import React from "react";
import { StyledBody, CardContainer } from "./styled";
import Card from "../Card/index"

function Body(props) {
  console.log(props)
  const cardList = props.cards.map((card) => {
    return <Card picture={card.picture} description={card.description}/>
  })

  return (
    <StyledBody>
      <h3>
        FAÇA SUA EMPRESA CRESCER COM A INTERNET
      </h3>
      <CardContainer>
        {cardList}
      </CardContainer>  
    </StyledBody>
  );
}

export default Body;
