import { useState } from "react";
import state from "../state";

const style = {
  zIndex: 1,
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  bottom: "5vh",
  height: "40px",
  width: "40px",
  backgroundColor: "rgb(30, 75, 93)",
  color: "white",
  borderRadius: "50%",
  fontSize: 20,
  fontWeight: "bold",
  border: "1px solid black",
  cursor: "pointer",
};

const CameraButtons = ({}) => {
  const sets = [
    // Mercedes
    {
      cameraPos: [-7, 4, 5],
      target: [-20, 0, 0],
      name: "Object_43",
    },
     
    // {
    //   cameraPos: [-7, 4, 5],
    //   target: [-12, 0, 0],
    //   name: "Object_3",
    // },
    
    // Supra
    {
      cameraPos: [2, 4, 5],
      target: [-4, 0, 0],
      name: "Plane004_Toyota_Supra_2020_with_Interior_@noTTo3Ds_carpaint001_0",
    },
    // Lamborghini
    {
      cameraPos: [9, 4, 4],
      target: [4, 0, 0],
      name: "Object_2",
    },
  ];

  let focusIndex = 2;
  const handleClick = (direction) => {
    if (direction === "right" && focusIndex < sets.length - 1) {
      focusIndex += 1;
    } else if (direction === "left" && focusIndex > -1) {
      focusIndex -= 1;
    } else {
      console.log("no action");
      focusIndex = 2;
    }
    const num = focusIndex;
    state.cameraPos.set(...sets[num].cameraPos);
    state.target.set(...sets[num].target);
    state.activeMeshName = sets[num].name;
    state.shouldUpdate = true;
  };
  return (
    <>
      <button
        onClick={(e) => handleClick("left")}
        style={{
          left: "40vw",
          ...style,
        }}
      >
        {"<"}
      </button>
      <button
        onClick={(e) => handleClick("right")}
        style={{
          right: "40vw",
          ...style,
        }}
      >
        {">"}
      </button>
    </>
  );
};

export default CameraButtons;
