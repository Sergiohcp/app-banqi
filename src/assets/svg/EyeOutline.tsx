import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";

function EyeOutline({ visible = false }: { visible?: boolean }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.414 10.586a2 2 0 10-2.828 2.828 2 2 0 002.828-2.828zm1.414-1.414a4 4 0 10-5.656 5.656 4 4 0 005.656-5.656z"
        fill="#333"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 12c.003.02.015.123.08.317.076.223.202.51.392.843.38.667.97 1.44 1.76 2.171C6.81 16.788 9.093 18 12 18s5.191-1.212 6.767-2.669c.792-.731 1.38-1.504 1.761-2.171.19-.333.316-.62.392-.843.065-.194.077-.296.08-.316l-.003-.01c-.016-.069-.103-.44-.505-1.092-.416-.676-1.054-1.462-1.888-2.208C16.928 7.19 14.633 6 12 6S7.072 7.19 5.396 8.69c-.834.747-1.472 1.533-1.888 2.209-.402.652-.489 1.023-.505 1.091l-.002.01zm9-8C5.5 4 1 9.867 1 12s4 8 11 8 11-5.867 11-8-4.5-8-11-8z"
        fill="#333"
      />
      {!visible && (
        <Rect
          x={2.808}
          y={4.25}
          width={2}
          height={24}
          rx={1}
          transform="rotate(-45 2.808 4.25)"
          fill="#333"
        />
      )}
    </Svg>
  );
}

export default EyeOutline;
