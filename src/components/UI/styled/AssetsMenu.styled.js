import styled from 'styled-components';

export const Container = styled.div `
    right: 0;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(10px);
    border-left: 1px solid rgba(255, 255, 255, 0.18);
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

export const CardsContainer = styled.div `
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

export const BottomContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 75px;
    justify-content: space-around;
    align-items: center;
`;

export const BottomContainerButton = styled.button `
    position: relative;
    width: 125px;
    height: 40px;
    border-radius: 8px;
    background-color: rgb(0, 102, 255);
    color: white;
    font-size: 18px;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: rgb(20, 122, 255);
    }
`;