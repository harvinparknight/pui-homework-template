import {  Suspense, useEffect, useRef, useState } from 'react';
import {Canvas} from '@react-three/fiber';
import Loader from '../components/Loader';
import Room from '../models/room';
import Sky from '../models/Sky';
import Harvin from '../models/harvin';


/*
<div className="absolute top-28 left-0 right-0 z-10 flex items-center 
        justify-center">
            3D Content
        </div>
*/

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustRoomForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.3, 5.3, 0];

    if(window.innerWidth < 768) {
      screenScale = [5,5,5];
      screenPosition = [-6, -3.0, -36]
    }
    else{
      screenScale = [9,9,9];
      screenPosition = [-11, -3, -42]
    }

    return [screenScale, screenPosition, rotation]
  }

  const [roomScale, roomPosition, roomRotation] = adjustRoomForScreenSize ();

  return (
    <section className="w-full h-screen relative">
      <Canvas 
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight intensity ={2}/>
          <pointLight />
          <hemisphereLight skyColor="b1e1ff" groundColor="000000" intensity={1}/>

          <Sky isRotating={isRotating} scale={[0.0001,0.0001,0.0001]}/>
          <Harvin />
          <Room 
            position = {roomPosition}
            scale = {roomScale}
            rotation = {roomRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home