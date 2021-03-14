import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ShoppingIcon({ color = "#333333" }: { color?: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4.773 7.876A1 1 0 015.766 7h12.468a1 1 0 01.993.876l1.5 12A1 1 0 0119.734 21H4.266a1 1 0 01-.993-1.124l1.5-12z"
        stroke={color}
        strokeWidth={2}
      />
      <Path
        d="M17 7.486V7.48v.005zm-.02-.542c-.725.054-2.148.056-4.966.056-1.712 0-2.931 0-3.804-.012a29.252 29.252 0 01-1.164-.032C7.222 4.846 9.265 3 12.014 3c2.745 0 4.785 1.84 4.967 3.944zM7 7.652a.152.152 0 010 0z"
        stroke={color}
        strokeWidth={2}
      />
    </Svg>
  );
}

export default ShoppingIcon;
