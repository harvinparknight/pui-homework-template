import React from 'react'
import harvinScene from "../assets/3d/harvin.glb";

import {useGLTF} from '@react-three/drei';

const harvin = () => {
    const {scene, animations} = useGLTF(harvinScene);

    return (
        <mesh position={[10,2,1]} scale={[0.03,0.03,0.03,]}>
            <primitive object={scene} />
        </mesh>
    )
}

export default harvin