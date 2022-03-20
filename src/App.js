import Css from './App.module.css';
import { Canvas, useFrame } from '@react-three/fiber'
import One from "./components/3d_models/One";
import Rainy from "./components/3d_models/Rainy";
import Sunny from "./components/3d_models/Sunny";
import ForWeb from "./components/3d_models/ForWeb";
import RainyAnimation from "./components/3d_models/RainyAnimation";
import CircleHeadOne from "./components/3d_models/CircleHeadOne"
import { Suspense, useRef, useEffect } from "react";
import { Flex, Box } from "@react-three/flex";
import { OrthographicCamera, OrbitControls } from "@react-three/drei";
import { Vector3 } from 'three';

function App() {
  return (
    <div className={Css.main}>
      <div className={Css.card}>
        <div className={Css.ModelHolder}>
          {/* <Suspense className={Css.canvas_container} fallback={<div>Loading... </div>}>
            <Canvas className={Css.theCanvas}>
              <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
              <OrthographicCamera makeDefault position={[0, 0, 0]} zoom={1} >
                <ambientLight />
                <Flex flexDirection="row" size={[100, 200, 0]}>
                  <Box centerAnchor padding={5}>
                    <Rainy />
                  </Box>
                </Flex>
              </OrthographicCamera>
            </Canvas>
          </Suspense> */}
          {/* <Suspense className={Css.canvas_container} fallback={<div>Loading... </div>}>
            <Canvas className={Css.theCanvas}>
              <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}/>
                <OrthographicCamera makeDefault position={[0, 0, 0]} zoom={15} far={100000} near={.0001}>
                  <ambientLight />
                  <Rainy />
                </OrthographicCamera>
            </Canvas>
          </Suspense> */}
          {/* <Suspense className={Css.canvas_container} fallback={<div>Loading... </div>}>
            <Canvas className={Css.theCanvas}>
              <OrbitControls></OrbitControls>
              <ambientLight />
              <Rainy />
            </Canvas>
          </Suspense> */}
          <Suspense className={Css.canvas_container} fallback={<div>Loading... </div>}>
            <Canvas className={Css.theCanvas}>
              <OrbitControls></OrbitControls>
              <ambientLight />
              <RainyAnimation />
              {/* <CircleHeadOne /> */}
            </Canvas>
          </Suspense>
        </div>
        <div className={Css.description}>
          hola
        </div>
      </div>
    </div>
  );
}

export default App;
