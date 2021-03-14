import React from "react";
import { TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

interface ITouchable {
  type?: "Opacity" | "WithoutFeedback";
  onPress: () => void;
}

const Touchable: React.FC<ITouchable> = ({
  children,
  type = "Opacity",
  onPress,
  ...rest
}) => {
  function getTouchableType() {
    switch (type) {
      case "WithoutFeedback":
        return (
          <TouchableWithoutFeedback onPress={onPress}>
            <View>{children}</View>
          </TouchableWithoutFeedback>
        );

      default:
        return (
          <TouchableOpacity onPress={onPress} {...rest}>
            {children}
          </TouchableOpacity>
        );
    }
  }

  return getTouchableType();
};

export default Touchable;
