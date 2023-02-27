import { useGLTF } from "@react-three/drei";

export function Model(props) {
    const {nodes, materials} = useGLTF("./pastabox.gltf");
    
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder.geometry}
                material={materials.cardboard}
                position={[0, 0.04, 0]}
                scale={0.03}
            />
        </group>
    );
}

useGLTF.preload("./pastabox.gltf");