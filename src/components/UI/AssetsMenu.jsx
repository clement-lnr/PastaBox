import React from "react";
import './AssetsMenu.css';
import Card from './Card';

const AssetsMenu = ({ active, setActive }) => {

    return (
        <>
            {
                active && (
                    <div className='AssetsMenu'>
                        <div className="MenuTop">
                            <h1>Assets</h1>
                            <div className="CloseButton">
                                <button onClick={ () => { setActive(false)}}>
                                    <img src='./back.png' />
                                </button>
                            </div>
                        </div>
                        <div className='CardsContainer'>
                            <Card/>
                            <Card/>
                        </div>
                        <div className="MenuBottom">
                            <button >importer</button>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default AssetsMenu;