import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { useBox } from "@react-three/cannon";
import * as THREE from "three";
function Box(props) {
  const [ref, api] = useBox(() => ({ mass:1,...props }));
  const texture = useLoader(THREE.TextureLoader, "/assets/wood.jpg");
  useFrame((state) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });
  function enterPointerHandler(e) {
    e.object.scale.x = 1.5;
    e.object.scale.y = 1.5;
    e.object.scale.z = 1.5;
  }
  function leavePointerHandler(e) {
    if (!e.object.active) {
      scaledown(e.object);
    }
  }
  function scaledown(object) {
    object.scale.x = 1;
    object.scale.y = 1;
    object.scale.z = 1;
  }
  function downPointerHandler(e) {
    e.object.active = true;
    if (window.activeMesh) {
      scaledown(window.activeMesh);
      window.activeMesh.active = false;
    }

    window.activeMesh = e.object;
  }
  return (
    <mesh
      ref={ref}
      {...props}
      castShadow
      onPointerEnter={enterPointerHandler}
      onPointerLeave={leavePointerHandler}
      onPointerDown={downPointerHandler}
    >
      <boxBufferGeometry />
      <meshPhysicalMaterial map={texture} />
    </mesh>
  );
}
export default Box;
