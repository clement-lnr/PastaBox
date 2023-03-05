import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber'
import './App.css';
import { Model } from './components/Model'
import { OrbitControls } from '@react-three/drei'
import AssetsMenu from './components/UI/AssetsMenu';

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="App">
      <Canvas camera={{ position: [3, 3, 4], fov: 75 }}>
        {/* <fog attach="fog" args={['white', 60, 100]} /> */}
        <ambientLight intensity={0.2}/>
        <pointLight position={[20, 50, 20]} />
        <Model />
        <OrbitControls autoRotate/>
      </Canvas>

      <button className='ParameterMenuBtn'>
        <img src='./parameter.png'/>
      </button>

      <button className='AssetsMenuBtn' onClick={ () => {setOpenMenu(true)} } >
        <img src='./PastaBoxIcon60.png' />
      </button>

      <AssetsMenu active={openMenu} setActive={setOpenMenu}/>


    </div>
  );
}

export default App;