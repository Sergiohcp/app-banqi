import Container from "@components/Container";
import { Text } from "@components/Text";
import Logo from "@svg/Logo";
import NotificationIcon from "@svg/NotificationIcon";
import VectorDown from "@svg/VectorDown";
import React from "react";

const Header: React.FC = () => {
  return (
    <Container
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      p={16}
    >
      <Container flexDirection="row">
        <Text>meu</Text>
        <Logo />
        <VectorDown />
      </Container>
      <NotificationIcon />
    </Container>
  );
};

export default Header;
