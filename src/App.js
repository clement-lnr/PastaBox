import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './App.css';
import { AssetsButton, AssetsImg, Container, SettingsButton, SettingsImg } from './App.styled';
import { Model } from './components/Model'
import SettingsMenu from './components/UI/SettingsMenu';
import AssetsMenu from './components/UI/AssetsMenu';

function App() {
  const [openAssetsMenu, setOpenAssetsMenu] = useState(false);
  const [openSettingsMenu, setOpenSettingsMenu] = useState(false);

  return (
    <Container>
      <Canvas camera={{ position: [3, 3, 4], fov: 75 }}>
        {/* <fog attach="fog" args={['white', 60, 100]} /> */}
        <ambientLight intensity={0.2}/>
        <pointLight position={[20, 50, 20]} />
        <Model />
        <OrbitControls autoRotate/>
      </Canvas>

      <SettingsButton onClick={ () => {setOpenSettingsMenu(true)} }>
        <SettingsImg src='./parameter.png' alt=''/>
      </SettingsButton>

      <AssetsButton onClick={ () => {setOpenAssetsMenu(true)} } >
        <AssetsImg src='./PastaBoxIcon60.png' alt=''/>
      </AssetsButton>

      <SettingsMenu active={openSettingsMenu} setActive={setOpenSettingsMenu}/>
      <AssetsMenu active={openAssetsMenu} setActive={setOpenAssetsMenu}/>


    </Container>
  );
}

export default App;