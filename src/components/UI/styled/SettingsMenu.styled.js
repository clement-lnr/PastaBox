import styled from 'styled-components';

export const Container = styled.div `
    left: 0;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    border-right: 1px solid rgba(255, 255, 255, 0.18);
    width: 345px;
    height: 100%;
`;

export const TopContainer = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 75px;
`;

export const TopContainerH1 = styled.h1 `
    position: relative;
    width: 150px;
`;

export const CloseButtonContainer = styled.div `
    position: relative;
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const CloseButton = styled.button `
    width: 35px;
    height: 35px;
    position: relative;
    border-radius: 20px;
    border: none;
    cursor: pointer;
`;

export const CloseButtonImg = styled.img `
    width: 35px;
    height: 35px;
`;

export const SettingsContainer = styled.div `
    display: flex;
    margin: auto;
    width: 310px;
    flex-direction: column;
`;

export const Settings = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
`;

export const CheckBox = styled.input`
    width: 20px;
    height: 20px;
    
    &:checked {
        background-color: #32a852;
    }
    &::after {
        background-color: #32a852;
    }
`;

export const SelectInput = styled.select`
    height: 20px;
`;
