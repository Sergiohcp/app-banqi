import * as React from "react";
import Svg, { Path } from "react-native-svg";

function VectorDown({
  width = 12,
  height = 7,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <Svg width={width} height={height} viewBox="0 0 12 7" fill="none">
      <Path
        d="M1 1l5 5 5-5"
        stroke="#EC008C"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default VectorDown;
