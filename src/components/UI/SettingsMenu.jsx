import React from "react";
import { CloseButton, CloseButtonContainer, CloseButtonImg, Container, SettingsContainer, TopContainer, TopContainerH1 } from "./styled/SettingsMenu.styled";

const SettingsMenu = ({ active, setActive }) => {
    return (
        <>
            {
                active &&(
                    <Container>
                        <TopContainer>
                            <TopContainerH1>Settings</TopContainerH1>
                            <CloseButtonContainer>
                                <CloseButton onClick={ () => { setActive(false)}}>
                                    <CloseButtonImg src='./back.png' />
                                </CloseButton>
                            </CloseButtonContainer>
                        </TopContainer>
                        <SettingsContainer>
                            <h2>afficher les fps</h2>
                            <h2>language</h2>
                            <h2>mode sombre</h2>
                        </SettingsContainer>
                    </Container>
                )
            }
        </>
    );
}

export default SettingsMenu;