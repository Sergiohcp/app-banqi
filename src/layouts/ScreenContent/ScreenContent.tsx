import React from "react";
import { Dimensions } from "react-native";
import LottieView from "lottie-react-native";

import Container from "@components/Container";
import Header from "@components/Header";
import Build from "@svg/Build";
import { Text } from "@components/Text";
const pigLoading = require("@lottie/pig-loading.json");

interface IScreenContent {
  loading?: boolean;
  building?: boolean;
}

const ScreenContent: React.FC<IScreenContent> = ({
  children,
  loading = false,
  building = false,
}) => {
  return (
    <Container flex={1} bgColor="background">
      <Header />
      {building && (
        <Container flex={1} alignItems="center" mt={90} mh={20}>
          <Build />
          <Text fontSize={20} fontWeight="bold" textAlign="center" mt={12}>
            Esta tela ainda está em contrução!
          </Text>
        </Container>
      )}
      {!loading ? (
        children
      ) : (
        <Container
          flex={1}
          width={Dimensions.get("screen").width}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <LottieView
            source={pigLoading}
            autoPlay
            loop
            style={{ width: 200 }}
          />
        </Container>
      )}
    </Container>
  );
};

export default ScreenContent;
