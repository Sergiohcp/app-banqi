import React from "react";

import Container from "@components/Container";
import { Text } from "@components/Text";
import Logo from "@svg/Logo";
import Notification from "@svg/Notification";
import VectorDown from "@svg/VectorDown";
import Touchable from "@components/Touchable";
import { Alert } from "react-native";

const Header: React.FC = () => {
  function onNotificationPress() {
    Alert.alert("Notificações", "Aqui é onde você pode ver suas notificações");
  }
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
      <Touchable type="WithoutFeedback" onPress={onNotificationPress}>
        <Container>
          <Notification />
        </Container>
      </Touchable>
    </Container>
  );
};

export default Header;
