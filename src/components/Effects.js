import React from "react";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
function Effects() {
  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={0}
        focalLength={0.02}
        bokehScale={2}
        height={480}
      />
    </EffectComposer>
  );
}

export default Effects;
