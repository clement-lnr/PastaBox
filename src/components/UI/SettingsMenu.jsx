import React from "react";
import { CloseButton, CloseButtonContainer, CloseButtonImg, Container, TopContainer, TopContainerH1 } from "./styled/SettingsMenu.styled";

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
                    </Container>
                )
            }
        </>
    );
}

export default SettingsMenu;