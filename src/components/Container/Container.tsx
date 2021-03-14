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
  mt?: number;
  ml?: number;
  mr?: number;
  mb?: number;
  p?: number;
  borderRadius?: number;
  style?: StyleProp<ViewStyle>;
  shadow?: boolean;
  bgColor?: string;
}

const Container: React.FC<IContainer> = ({ children, ...rest }) => {
  const {
    flex = 0,
    justifyContent = "flex-start",
    alignItems = "flex-start",
    mt = 0,
    ml = 0,
    mr = 0,
    mb = 0,
    p = 0,
    borderRadius = 0,
    style,
    shadow = false,
    bgColor = "transparent",
  } = rest;

  let viewStyle: ViewStyle = {
    flex,
    justifyContent: justifyContent,
    alignItems,
    marginTop: mt,
    marginLeft: ml,
    marginRight: mr,
    marginBottom: mb,
    padding: p,
    borderRadius,
    backgroundColor: bgColor,
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
