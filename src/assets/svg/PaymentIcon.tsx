import * as React from "react";
import Svg, { Path } from "react-native-svg";

function PaymentIcon({ color = "#333333" }: { color?: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 7v10M16.5 7v10M13.5 7v7M10.5 7v7"
      />
      <Path
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        d="M2 22v-6M8 22H2M2 2v6M8 2H2M22 2v6M16 2h6M22 22v-6M16 22h6"
      />
    </Svg>
  );
}

export default PaymentIcon;
