import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { UserActions } from "@redux/ducks/user/user.types";
import { getLoadingSelector } from "@redux/ducks/loading/loading.selectors";
import ScreenContent from "layouts/ScreenContent";

import BalanceSection from "./components/BalanceSection";
import CardsSection from "./components/CardsSection";
import LoanSection from "./components/LoanSection";

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();

  const isUserLoading = useSelector(getLoadingSelector(UserActions.GET_USER));

  useEffect(() => {
    dispatch({ type: UserActions.GET_USER });
  }, []);

  return (
    <ScreenContent loading={isUserLoading}>
      <BalanceSection />
      <CardsSection />
      <LoanSection />
    </ScreenContent>
  );
};

export default HomeScreen;
