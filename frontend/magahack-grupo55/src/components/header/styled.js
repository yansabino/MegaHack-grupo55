import styled from "styled-components";

export const StyledHeader = styled.header `
    width: 100%;
    max-height: 10%;
    background-color: white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    top: 0px;
    z-index: 1;
    border: 1px solid black;
`

export const TitleContainer = styled.div`
    max-width: 300px;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 67px;
    align-items: center;
`

export const StyledText = styled.div`
    margin: 0 15px;
    height: 100%;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover{
        background-color: gray;
        color: white;
    }
`
