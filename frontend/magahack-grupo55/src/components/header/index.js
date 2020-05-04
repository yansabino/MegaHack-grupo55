import React from "react";
import {
  StyledHeader,
  TitleContainer,
  ButtonContainer,
  StyledText,
} from "./styled";

function Header(props) {
  const menuMock = [
    {
      label: "HOME",
      command: () => props.history.push("/"),
    },
    {
      label: "QUEM SOMOS",
      command: () => props.history.push("/about"),
    },
    {
      label: "POR ONDE COMEÇAR",
      command: () => props.history.push("/wheretobegin"),
    },
    {
      label: "CONTATO",
      command: () => props.history.push("/contato"),
    },
  ];

  const menuList = menuMock.map((menuItem) => {
    return <StyledText onClick={menuItem.command}>{menuItem.label}</StyledText>;
  });

  const brandName = "i.EDU"
  
  return (
    <StyledHeader>
      <TitleContainer>
        <h2>{brandName}</h2>
      </TitleContainer>
      <ButtonContainer>{menuList}</ButtonContainer>
    </StyledHeader>
  );
}

export default Header;
