import React from "react";
import { Suspense } from "react";
import BoundingBox from "./BoundingBox";
import Draggable from "./Draggable";
import Model from "./Model";
function Cars() {
  return (
    <Suspense fallback={null}>
      <Draggable tranformGroup>
      <BoundingBox
        position={[4, 2, 0]}
        dims={[5, 2, 8]}
        offset={[0, -0.005, 0.65]}
      >
        <Model
          path="/lamborghini_aventador_lp700/scene.gltf"
          scale={new Array(3).fill(0.55)}
          // position={[4, 0.93, 0]}
        />
      </BoundingBox>
      </Draggable>
      <Draggable transformGroup>
      <BoundingBox
        position={[-4, 2, 0]}
        dims={[5, 2, 8]}
        offset={[0, -0.95, -0.2]}
      >
        <Model
          path="/toyota_gr_supra/scene.gltf"
          scale={new Array(3).fill(1.6)}
          // position={[-4, 0.05, 0]}
        />
      </BoundingBox>
      </Draggable>
      {/* <Draggable >
      <BoundingBox
        position={[-12, 2, 0]}
        dims={[5, 2, 8]}
        offset={[0, -0.5, -0.2]}
      >
        <Model
          path="/ford_mustang_shelby_2012/scene.gltf"
          scale={new Array(3).fill(0.6)}
          // position={[-4, 0.05, 0]}
        />
      </BoundingBox>
      </Draggable> */}
      <Draggable transformGroup>
      <BoundingBox
        position={[-12, 2, 0]}
        dims={[5, 2, 8]}
        offset={[0, -0.5, -0.2]}
      >
        <Model
          path="/mercedes_benz_sl65_amg/scene.gltf"
          scale={new Array(3).fill(0.4)}
          // position={[-4, 0.05, 0]}
        />
      </BoundingBox>
      </Draggable>

    </Suspense>
  );
}

export default Cars;
