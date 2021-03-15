import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/core";

import Container from "@components/Container";
import Logo from "@svg/Logo";

const InitialScreen: React.FC = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Tab");
    }, 1000);
  }, []);

  return (
    <Container
      flex={1}
      justifyContent="center"
      alignItems="center"
      bgColor="white"
    >
      <Logo size={5} />
    </Container>
  );
};

export default InitialScreen;
