import React from "react";
import {
  StyledHeader,
  TitleContainer,
  ButtonContainer,
  StyledText,
} from "./styled";

function Header(props) {
  console.log(props.menu)
  const menuList = props.menu.map((menuItem) => {
  return <StyledText onClick={menuItem.command}>{menuItem.label}</StyledText>
  })
  return (
    <StyledHeader>
      <TitleContainer>
        <h2>i.EDU</h2>
      </TitleContainer>
      <ButtonContainer>
        {menuList}
      </ButtonContainer>
    </StyledHeader>
  );
}

export default Header;
