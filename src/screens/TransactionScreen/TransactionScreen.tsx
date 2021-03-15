import React, { useEffect, useRef } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/core";

import Container from "@components/Container";
import { Text } from "@components/Text";
import Transaction from "domain/Transaction";
import LottieView from "lottie-react-native";
const receipt = require("@lottie/receipt.json");

type TransactionRouteProps = {
  TransactionScreen: {
    transaction: Transaction;
  };
};

type TransactionScreenRouteProps = RouteProp<
  TransactionRouteProps,
  "TransactionScreen"
>;

const TransactionScreen: React.FC = () => {
  const route = useRoute<TransactionScreenRouteProps>();

  const ref = useRef<any>(null);

  const { transaction } = route.params;

  useEffect(() => {
    ref.current.play();
    setTimeout(() => {
      ref.current.pause();
    }, 1500);
  }, []);

  const transactionInfos = [
    {
      title: "ID",
      description: transaction.id,
    },
    {
      title: "Nome",
      description: transaction.description,
    },
    {
      title: "Data",
      description: transaction.dateFormated(),
    },
    {
      title: "Valor",
      description: transaction.amountCurrency().substring(2),
    },
    {
      title: "Tipo",
      description: transaction.amount > 0 ? "Depósito" : "Saque",
    },
  ];

  return (
    <Container flex={1} bgColor="white">
      <LottieView
        source={receipt}
        style={{ width: 200, alignSelf: "center" }}
        ref={ref}
      />
      {transactionInfos.map((info, index) => (
        <Container
          flexDirection="row"
          justifyContent="space-between"
          bgColor={"white"}
          borderRadius={4}
          shadow
          p={16}
          mh={20}
          mt={index !== 0 ? 12 : 0}
        >
          <Text fontSize={14} fontWeight="bold" color="pink">
            {info.title}
          </Text>
          <Text fontSize={14}> {info.description}</Text>
        </Container>
      ))}
    </Container>
  );
};

export default TransactionScreen;
