import * as React from "react";
import Svg, { Path } from "react-native-svg";

function TicketIcon({ color = "#333333" }: { color?: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 3.997C3 3.447 3.446 3 4 3h16c.554 0 1 .447 1 .997V21.3a7.792 7.792 0 01-.36-.241c-.24-.168-.49-.359-.76-.563l-.035-.026c-.276-.21-.571-.433-.86-.634a7.061 7.061 0 00-.9-.546C17.795 19.148 17.414 19 17 19c-.664 0-1.208.28-1.626.564-.305.209-.622.479-.9.716-.084.071-.164.14-.24.202-.716.597-1.356 1.018-2.234 1.018-.878 0-1.518-.42-2.235-1.018l-.239-.202c-.278-.237-.595-.508-.9-.716C8.208 19.28 7.664 19 7 19c-.414 0-.796.148-1.085.29-.306.15-.614.346-.9.545-.289.201-.584.424-.86.634l-.035.026c-.27.204-.52.395-.76.563A7.808 7.808 0 013 21.3V3.997zM7 7h10M7 11h10M7 15h10"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default TicketIcon;
