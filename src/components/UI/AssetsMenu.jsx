import React from "react";
import { BottomContainer, BottomContainerButton, CardsContainer, CloseButton, CloseButtonContainer, CloseButtonImg, Container, TopContainer, TopContainerH1 } from "./styled/AssetsMenu.styled";
import Card from './Card';

const AssetsMenu = ({ active, setActive }) => {

    return (
        <>
            {
                active && (
                    <Container>
                        <TopContainer>
                            <TopContainerH1>Assets</TopContainerH1>
                            <CloseButtonContainer>
                                <CloseButton onClick={ () => { setActive(false)}}>
                                    <CloseButtonImg src='./back.png' />
                                </CloseButton>
                            </CloseButtonContainer>
                        </TopContainer>
                        <CardsContainer>
                            <Card/>
                            <Card/>
                        </CardsContainer>
                        <BottomContainer>
                            <BottomContainerButton>importer</BottomContainerButton>
                        </BottomContainer>
                    </Container>
                )
            }
        </>
    );
}

export default AssetsMenu;