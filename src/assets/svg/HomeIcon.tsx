import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function HomeIcon({ color = "#333333" }: { color?: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 10.89a1 1 0 01.331-.743l8-7.2a1 1 0 011.338 0l8 7.2a1 1 0 01.331.744V20a1 1 0 01-1 1H4a1 1 0 01-1-1v-9.11z"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect
        x={9}
        y={13}
        width={6}
        height={8}
        rx={1}
        stroke={color}
        strokeWidth={2}
      />
    </Svg>
  );
}

export default HomeIcon;
