import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Physics } from "@react-three/cannon";
import Orbit from "./components/Orbit";
import Box from "./components/Box";
import Floor from "./components/Floor";
import Bulb from "./components/Bulb";

import Background from "./components/Background";
import ColorPicker from "./components/ColorPicker";
import Model from "./components/Model";
import BoundingBox from "./components/BoundingBox";
import Cars from "./components/Cars";
import CameraControls from "./components/CameraControls";
import CameraButtons from "./components/CameraButtons";
import Effects from "./components/Effects";
function App() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ColorPicker />
      <CameraButtons />
      <Canvas
        
        shadows
        style={{ background: "black" }}
        camera={{ position: [6, 6, 6] }}
      >
        <Physics>
          <Suspense fallback={null}>
            <Background />
          </Suspense>
          <Bulb position={[4, 5, 0]} />
          <Bulb position={[-4, 5, 0]} />
          <Bulb position={[-12, 5, 0]} />
          <Floor position={[0, -0.5, 0]} />
          <Cars />
        </Physics>
        {/* <Effects /> */}
        <CameraControls />
        <ambientLight intensity={0.5} />
        <Orbit />
        {/* <axesHelper args={[5]} /> */}
      </Canvas>
    </div>
  );
}

export default App;
