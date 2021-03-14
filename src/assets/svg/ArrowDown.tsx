import { colors } from "@styles/colors";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent({ color = colors.black }: { color?: string }) {
  return (
    <Svg width={24} height={29} viewBox="0 0 24 29" fill="none">
      <Path
        d="M13.002 1a1 1 0 10-2 0h2zm-1 26l-.707.707.707.707.707-.707-.707-.707zm10.92-9.507a1 1 0 00-1.413-1.414l1.414 1.414zM2.495 16.079a1 1 0 10-1.414 1.414l1.414-1.414zM11.002 1v26h2V1h-2zM21.509 16.08L11.295 26.293l1.414 1.414 10.214-10.214-1.414-1.414zm-8.8 10.214L2.494 16.079 1.08 17.493l10.215 10.214 1.414-1.414z"
        fill={color}
      />
    </Svg>
  );
}

export default SvgComponent;
