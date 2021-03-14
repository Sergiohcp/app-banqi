import { colors } from "@styles/colors";
import React from "react";
import { View, FlexAlignType, StyleProp, ViewStyle } from "react-native";

interface IContainer {
  flex?: number;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: FlexAlignType;
  alignSelf?: "auto" | FlexAlignType;
  mv?: number;
  mh?: number;
  mt?: number;
  ml?: number;
  mr?: number;
  mb?: number;
  p?: number;
  pv?: number;
  ph?: number;
  borderRadius?: number;
  style?: StyleProp<ViewStyle>;
  shadow?: boolean;
  bgColor?: string;
  width?: number | string;
  height?: number | string;
}

const Container: React.FC<IContainer> = ({
  children,
  flex = 0,
  flexDirection = "column",
  justifyContent = "flex-start",
  alignItems = "flex-start",
  alignSelf = "auto",
  mv,
  mh,
  mt,
  ml,
  mr,
  mb,
  p,
  pv,
  ph,
  borderRadius,
  style,
  shadow = false,
  bgColor = "transparent",
  width = "auto",
  height = "auto",
}) => {
  function getBackgroundColor() {
    switch (bgColor) {
      case "pink":
        return colors.pink;

      case "cyan":
        return colors.cyan;

      case "green":
        return colors.green;

      case "black":
        return colors.black;

      case "white":
        return colors.white;

      case "background":
        return colors.background;

      default:
        return bgColor;
    }
  }

  let viewStyle: ViewStyle = {
    flex,
    justifyContent: justifyContent,
    flexDirection,
    alignItems,
    alignSelf,
    marginVertical: mv,
    marginHorizontal: mh,
    marginTop: mt,
    marginLeft: ml,
    marginRight: mr,
    marginBottom: mb,
    padding: p,
    paddingVertical: pv,
    paddingHorizontal: ph,
    borderRadius,
    backgroundColor: getBackgroundColor(),
    width,
    height,
  };

  if (shadow) {
    viewStyle = {
      ...viewStyle,
      shadowColor: "#000000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    };
  }

  return <View style={[viewStyle, style]}>{children}</View>;
};

export default Container;
