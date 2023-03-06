import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background-color: rgb(232, 232, 232);
`;

export const SettingsButton = styled.button`
    position: absolute;
    top: 15px;
    left: 15px;
    border: none;
    cursor: pointer;
    width: 60px;
    height: 60px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const SettingsImg = styled.img`
    width: 40px;
    height: 40px;
`;

export const AssetsButton = styled.button`
    position: absolute;
    cursor: pointer;
    background-color: transparent;
    border: none;
    top: 15px;
    right: 15px;
    border-radius: 12px;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AssetsImg = styled.img`
    width: 60px;
    height: 60px;
`;