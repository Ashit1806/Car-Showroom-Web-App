import { useBox } from "@react-three/cannon";
function Floor(props) {
  const [ref, api] = useBox(() => ({ args: [200, 1, 200], ...props }));
  return (
    <mesh ref={ref} {...props} receiveShadow>
      <boxBufferGeometry args={[200, 1, 200]} />
      <meshPhysicalMaterial tranparent opacity={800} />
    </mesh>
  );
}
export default Floor;
