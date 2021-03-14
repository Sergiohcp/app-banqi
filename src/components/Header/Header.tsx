import React from "react";

import Container from "@components/Container";
import { Text } from "@components/Text";
import Logo from "@svg/Logo";
import Notification from "@svg/Notification";
import VectorDown from "@svg/VectorDown";

const Header: React.FC = () => {
  return (
    <Container
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      p={20}
      mt={26}
    >
      <Container flex={1} flexDirection="row" alignItems="center">
        <Text fontSize={16} fontWeight="bold" color="pink" mr={3}>
          meu
        </Text>
        <Logo />
        <Container ml={8}>
          <VectorDown />
        </Container>
      </Container>
      <Container>
        <Notification />
      </Container>
    </Container>
  );
};

export default Header;
