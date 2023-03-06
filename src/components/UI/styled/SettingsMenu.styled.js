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