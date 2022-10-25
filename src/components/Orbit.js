import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { extend, useThree } from "@react-three/fiber";
extend({ OrbitControls });
function Orbit() {
  const { camera, gl } = useThree();
  return (
    <orbitControls attach="orbitControls" args={[camera, gl.domElement]} />
  );
}
export default Orbit;
