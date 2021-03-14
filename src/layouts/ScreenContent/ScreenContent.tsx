import React from "react";
import LottieView from "lottie-react-native";

import Container from "@components/Container";
import { Dimensions } from "react-native";
import Header from "@components/Header";
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
