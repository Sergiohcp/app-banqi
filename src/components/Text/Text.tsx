import React from "react";
import { Text as ReactText, TextProps } from "react-native";

import { colors } from "@styles/colors";
import { fonts } from "@styles/fonts";
import Container from "@components/Container";

interface IText {
  fontWeight?: "regular" | "bold";
  fontSize?: number;
  color?: string;
  textAlign?: "left" | "center" | "right";
  textStyle?: TextProps;
  mt?: number;
  ml?: number;
  mr?: number;
  mb?: number;
}

export const Text: React.FC<IText> = ({
  children,
  fontWeight = "regular",
  fontSize = fonts.size.fontSize12,
  color = "black",
  textAlign = "left",
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
      textAlign,
    };

    if (!!fontWeights[fontWeight]) {
      style.fontFamily = fontWeights[fontWeight];
    }

    return style;
  }

  const { mt, ml, mr, mb } = rest;

  return (
    <Container mt={mt} ml={ml} mr={mr} mb={mb} {...rest}>
      <ReactText style={[getStyle(), textStyle]}>{children}</ReactText>
    </Container>
  );
};
