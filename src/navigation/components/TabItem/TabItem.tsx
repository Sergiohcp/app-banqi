import React from "react";
import { View } from "react-native";

import HomeIcon from "@svg/HomeIcon";
import { Text } from "@components/Text";

import styles from "./styles";
import { colors } from "@styles/colors";

interface ITabItem {
  routeName: "Home" | "Shopping" | "Payment" | "Cards" | "Ticket" | string;
  focused: boolean;
}

const TabItem: React.FC<ITabItem> = ({ routeName, focused }) => {
  function getIcon() {
    switch (routeName) {
      case "Home":
        return <HomeIcon color={focused ? colors.pink : colors.black} />;
      case "Shopping":
        return <HomeIcon color={focused ? colors.pink : colors.black} />;
      case "Payment":
        return <HomeIcon color={focused ? colors.pink : colors.black} />;
      case "Cards":
        return <HomeIcon color={focused ? colors.pink : colors.black} />;
      case "Ticket":
        return <HomeIcon color={focused ? colors.pink : colors.black} />;
      default:
        return null;
    }
  }

  function getTitle() {
    switch (routeName) {
      case "Home":
        return "Início";
      case "Shopping":
        return "Compras";
      case "Payment":
        return "Pagar";
      case "Cards":
        return "Cartões";
      case "Ticket":
        return "Carnês";
      default:
        return null;
    }
  }

  return (
    <View style={styles.tabItemView}>
      {getIcon()}
      <View style={styles.tabItemText}>
        <Text color={focused ? "pink" : "black"}>{getTitle()}</Text>
      </View>
    </View>
  );
};

export default TabItem;
