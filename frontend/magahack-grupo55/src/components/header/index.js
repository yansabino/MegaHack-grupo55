import React from "react";
import {
  StyledHeader,
  TitleContainer,
  ButtonContainer,
  StyledText,
} from "./styled";

function Header() {
  return (
    <StyledHeader>
      <TitleContainer>
        <h2>i.EDU</h2>
      </TitleContainer>
      <ButtonContainer>
        <StyledText>HOME</StyledText>
        <StyledText>QUEM SOMOS</StyledText>
        <StyledText>POR ONDE COMEÇAR</StyledText>
      </ButtonContainer>
    </StyledHeader>
  );
}

export default Header;
