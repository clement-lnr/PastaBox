import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Box from './components/Box'
import './App.css';

function App() {
  return (
    <div className="App">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]} />
      </Canvas>,
    </div>
  );
}

export default App;
