function Bulb(props) {
  return (
    <mesh {...props}>
      <sphereBufferGeometry />
      <pointLight castShadow />
      <meshPhongMaterial emissive="yellow" />
    </mesh>
  );
}
export default Bulb;
