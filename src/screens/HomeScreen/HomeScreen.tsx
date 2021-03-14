import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch } from "react-redux";

import { UserActions } from "@redux/ducks/user/user.types";

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: UserActions.GET_USER });
  }, []);

  return (
    <View>
      <Text>HOME</Text>
    </View>
  );
};

export default HomeScreen;
