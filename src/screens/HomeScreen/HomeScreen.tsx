import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { UserActions } from "@redux/ducks/user/user.types";
import Container from "@components/Container";
import Header from "@components/Header";
import CardsSection from "./components/CardsSection";
import BalanceSection from "./components/BalanceSection";

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: UserActions.GET_USER });
  }, []);

  return (
    <Container flex={1} bgColor="background">
      <Header />
      <BalanceSection />
      <CardsSection />
    </Container>
  );
};

export default HomeScreen;
