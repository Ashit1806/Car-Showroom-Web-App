import * as THREE from "three";
import state from "../state";
function ColorPicker() {
  function clickHandler(e) {
    if (!state.activeMesh) return;
    state.activeMesh.material.color = new THREE.Color(
      e.target.style.background
    );
  }
  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1,
        left: 0,
        right: 0,
        margin: "auto",
        width: "fit-content",
        display: "flex",
        top: "20px",
      }}
    >
      <div
        onClick={clickHandler}
        style={{ background: "#36454F", width: 50, height: 50 }}
      ></div>
      <div
        onClick={clickHandler}
        style={{ background: "#6495ED", width: 50, height: 50 }}
      ></div>
      <div
        onClick={clickHandler}
        style={{ background: "#00A36C", width: 50, height: 50 }}
      ></div>
      <div
        onClick={clickHandler}
        style={{ background: "#FDDA0D", width: 50, height: 50 }}
      ></div>
    </div>
  );
}
export default ColorPicker;
