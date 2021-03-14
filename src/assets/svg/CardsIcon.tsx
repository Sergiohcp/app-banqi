import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function CardsIcon({ color = "#333333" }: { color?: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M17 2H5a1 1 0 00-1 1v16"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect
        x={20}
        y={6}
        width={16}
        height={12}
        rx={1}
        transform="rotate(90 20 6)"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.663 14A4.5 4.5 0 018 17.947v-7.894A4.5 4.5 0 0114.663 14zM11.207 15.293l4 4"
        stroke={color}
        strokeWidth={2}
      />
    </Svg>
  );
}

export default CardsIcon;
