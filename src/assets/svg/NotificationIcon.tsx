import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function NotificationIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M22 20v1a1 1 0 00.928-1.373L22 20zM2 20l-.928-.373A1 1 0 002 21v-1zm1.905-4.737l.928.373.072-.18v-.193h-1zm16.19 0h-1v.194l.072.18.928-.374zM22 19H2v2h20v-2zM4.905 10.053C4.905 6.167 8.08 3 12 3V1c-5.014 0-9.095 4.052-9.095 9.053h2zM12 3c3.92 0 7.095 3.167 7.095 7.053h2C21.095 5.053 17.014 1 12 1v2zM2.928 20.373l1.905-4.737-1.856-.746-1.905 4.737 1.856.746zm1.977-5.11v-5.21h-2v5.21h2zm14.19-5.21v5.21h2v-5.21h-2zm.072 5.583l1.905 4.737 1.856-.746-1.905-4.737-1.856.746z"
        fill="#000"
      />
      <Path
        d="M14 21c0 1.106-.894 2-2 2-1.106 0-2-.894-2-2"
        stroke="#000"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <Circle cx={20} cy={5} r={4} fill="#EC008C" />
    </Svg>
  );
}

export default NotificationIcon;
