import React from "react";
import { View } from "react-native";

import HomeIcon from "@svg/HomeIcon";
import { Text } from "components/Text";

import styles from "./styles";

interface ITabItem {
  routeName: "Home" | "Shopping" | "Payment" | "Cards" | "Ticket" | string;
}

const TabItem: React.FC<ITabItem> = ({ routeName }) => {
  function getIcon() {
    switch (routeName) {
      case "Home":
        return <HomeIcon />;
      case "Shopping":
        return <HomeIcon />;
      case "Payment":
        return <HomeIcon />;
      case "Cards":
        return <HomeIcon />;
      case "Ticket":
        return <HomeIcon />;
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
      <Text>{getTitle()}</Text>
    </View>
  );
};

export default TabItem;
