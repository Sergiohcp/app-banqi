import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function Loan() {
  return (
    <Svg width={22} height={30} viewBox="0 0 22 30" fill="none">
      <Circle
        cx={13}
        cy={9}
        r={7.25}
        stroke="#00B0F0"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11 11c0 .5.895 1 2 1s2-.642 2-1.43c0-.788-.558-1.376-2-1.57-1.316-.162-2-.588-2-1.57 0-.788.895-1.43 2-1.43s2 0 2 1"
        stroke="#00B0F0"
        strokeWidth={2}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        stroke="#00B0F0"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 13v.125M13 5v-.141"
      />
      <Path
        d="M21 26v.265a1 1 0 01-.702.954l-6.454 2.017a3 3 0 01-1.696.028L6 27.56V28a1 1 0 01-1 1H1a1 1 0 01-1-1v-9a1 1 0 011-1h6.067a5 5 0 011.749.316L14.13 20.3A2.89 2.89 0 0116 23h2c1.66 0 3 1.34 3 3zM4 27v-7H2v7h2zm14.9-1.43c-.16-.33-.51-.57-.9-.57h-5.35c-.54 0-1.07-.08-1.58-.25l-1.431-.475a1 1 0 01.63-1.9l1.431.475c.3.1 2.3.15 2.3.15 0-.37-.23-.7-.57-.83L7.61 20H6v5.5l6.97 1.91 5.93-1.84z"
        fill="#00B0F0"
      />
    </Svg>
  );
}

export default Loan;
