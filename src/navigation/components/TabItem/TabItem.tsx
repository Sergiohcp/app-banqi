import React from "react";

import ShoppingIcon from "@svg/ShoppingIcon";
import PaymentIcon from "@svg/PaymentIcon";
import CardsIcon from "@svg/CardsIcon";
import TicketIcon from "@svg/TicketIcon";
import HomeIcon from "@svg/HomeIcon";
import { Text } from "@components/Text";
import { colors } from "@styles/colors";
import Container from "@components/Container";

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
        return <ShoppingIcon color={focused ? colors.pink : colors.black} />;
      case "Payment":
        return <PaymentIcon color={focused ? colors.pink : colors.black} />;
      case "Cards":
        return <CardsIcon color={focused ? colors.pink : colors.black} />;
      case "Ticket":
        return <TicketIcon color={focused ? colors.pink : colors.black} />;
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
    <Container alignItems="center" mt={8}>
      {getIcon()}
      <Text color={focused ? "pink" : "black"} mt={4}>
        {getTitle()}
      </Text>
    </Container>
  );
};

export default TabItem;
