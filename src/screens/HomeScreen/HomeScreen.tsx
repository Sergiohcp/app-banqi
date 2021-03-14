import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { UserActions } from "@redux/ducks/user/user.types";
import { getUserSelector } from "@redux/ducks/user/user.selectors";
import Container from "@components/Container";
import Header from "@components/Header";
import { Text } from "@components/Text";
import EyeOutline from "@svg/EyeOutline";
import Touchable from "@components/Touchable";
import CardsSection from "./components/CardsSection";

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();

  const user = useSelector(getUserSelector);

  const [showValue, setShowValue] = useState(false);

  useEffect(() => {
    dispatch({ type: UserActions.GET_USER });
  }, []);

  return (
    <Container flex={1} bgColor="background">
      <Header />
      <Container alignItems="center" alignSelf="center">
        <Text fontSize={14} textAlign="center">
          Meu saldo:
        </Text>
        <Container flexDirection="row" alignItems="center" mt={8}>
          <Text fontSize={24} fontWeight="bold">
            R${" "}
          </Text>
          <Text fontSize={28} fontWeight="bold">
            {showValue ? user.balanceCurrency().substring(3) : "--"}
          </Text>
          <Touchable
            type="WithoutFeedback"
            onPress={() => setShowValue(!showValue)}
          >
            <Container ml={12}>
              <EyeOutline visible={showValue} />
            </Container>
          </Touchable>
        </Container>
      </Container>
      <CardsSection />
    </Container>
  );
};

export default HomeScreen;
