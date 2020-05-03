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
        <h2>Nome do Trem</h2>
      </TitleContainer>
      <ButtonContainer>
        <StyledText>Home</StyledText>
        <StyledText>Quem somos</StyledText>
        <StyledText>Objetivos</StyledText>
        <StyledText>Mídias Sociais</StyledText>
        <StyledText>Contato</StyledText>
      </ButtonContainer>
    </StyledHeader>
  );
}

export default Header;
