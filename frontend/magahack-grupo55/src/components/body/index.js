import React from "react";
import { StyledBody, CardContainer } from "./styled";
import Card from "../Card/index"

const cardMock = [
  {
    id: "1",
    picture: "https://image.flaticon.com/icons/svg/1336/1336494.svg",
    description: "Quero crescer com um Site Online",
  },
  {
    id: "2",
    picture: "https://image.flaticon.com/icons/svg/1384/1384031.svg",
    description: "Quero crescer no Instagram",
  },
  {
    id: "3",
    picture: "https://image.flaticon.com/icons/svg/1051/1051360.svg",
    description: "Quero crescer no Facebook",
  },
];

function Body(props) {
  
  const cardList = cardMock.map((card) => {
    return <Card key={card.id} picture={card.picture} description={card.description}/>
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
