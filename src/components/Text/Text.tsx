import React from "react";
import { View, Text as ReactText, TextProps } from "react-native";

import { colors } from "@styles/colors";
import { fonts } from "@styles/fonts";

interface IText {
  fontWeight?: "regular" | "bold";
  fontSize?: number;
  color?: string;
  textStyle?: TextProps;
}

export const Text: React.FC<IText> = ({
  children,
  fontWeight = "regular",
  fontSize = fonts.size.fontSize12,
  color = "black",
  textStyle,
  ...rest
}) => {
  const fontWeights = {
    regular: fonts.family.regular,
    bold: fonts.family.bold,
  };

  function getTextColor() {
    switch (color) {
      case "pink":
        return colors.pink;

      case "cyan":
        return colors.cyan;

      case "green":
        return colors.green;

      case "black":
        return colors.black;

      default:
        return color;
    }
  }

  function getStyle() {
    const style = {
      fontFamily: fontWeights["regular"],
      fontSize,
      color: getTextColor(),
    };

    if (!!fontWeights[fontWeight]) {
      style.fontFamily = fontWeights[fontWeight];
    }

    if (!!fontSize) {
      style.fontSize = fontSize;
    }

    return style;
  }

  return (
    <View {...rest}>
      <ReactText style={[getStyle(), textStyle]}>{children}</ReactText>
    </View>
  );
};
