import * as React from "react";
import Svg, { Path } from "react-native-svg";

import { colors } from "@styles/colors";

function ArrowUp({ color = colors.black }: { color?: string }) {
  return (
    <Svg width={24} height={29} viewBox="0 0 24 29" fill="none">
      <Path
        d="M11.215 27.02a1 1 0 002 0h-2zm1-25.02l.708-.707-.707-.707-.708.707.707.707zM1.291 11.51a1 1 0 001.414 1.414L1.291 11.51zm20.433 1.414a1 1 0 101.415-1.414l-1.415 1.414zM13.215 27.02V2h-2v25.02h2zM2.705 12.924L12.922 2.707l-1.414-1.414L1.291 11.51l1.414 1.414zm8.803-10.217l10.216 10.217 1.415-1.414L12.923 1.293l-1.415 1.414z"
        fill={color}
      />
    </Svg>
  );
}

export default ArrowUp;
