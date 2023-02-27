import { Canvas } from '@react-three/fiber'
import './App.css';
import Card from './components/Card';
import { Model } from './components/Model'

function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [3, 3, 4], fov: 75 }}>
        {/* <fog attach="fog" args={['white', 60, 100]} /> */}
        <ambientLight intensity={0.3}/>
        <pointLight position={[10, 10, 10]} />
        <Model />
      </Canvas>
      <div className='AssetsMenu'>
        <h2>Assets</h2>
        <Card/>
      </div>
    </div>
  );
}

export default App;
