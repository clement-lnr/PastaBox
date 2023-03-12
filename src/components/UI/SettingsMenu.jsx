import React, { useEffect, useState } from "react";
import { CheckBox, CloseButton, CloseButtonContainer, CloseButtonImg, Container, SelectInput, Settings, SettingsContainer, TopContainer, TopContainerH1 } from "./styled/SettingsMenu.styled";

const SettingsMenu = ({ active, setActive, FPS, setFPS }) => {

    useEffect(() => {
        window.localStorage.setItem('SHOW_FPS', JSON.stringify(FPS))
    }, [FPS])

    const checkHandler = () => {
        setFPS(!FPS)
    }

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
                            <Settings>
                                <h2>afficher les fps</h2>
                                <CheckBox type="checkbox" checked={FPS} onChange={checkHandler}/>
                            </Settings>
                            <Settings>
                                <h2>language</h2>
                                <SelectInput>
                                    <option>Francais</option>
                                    <option>Anglais</option>
                                    <option>Allemand</option>
                                    <option>Russe</option>
                                    <option>Espagnol</option>
                                </SelectInput>
                            </Settings>
                            <Settings>
                                <h2>mode sombre</h2>
                                <CheckBox type="checkbox" />
                            </Settings>
                        </SettingsContainer>
                    </Container>
                )
            }
        </>
    );
}

export default SettingsMenu;