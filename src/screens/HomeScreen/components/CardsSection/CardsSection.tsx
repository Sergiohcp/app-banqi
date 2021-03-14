import Card from "@components/Card";
import Container from "@components/Container";
import ArrowDown from "@svg/ArrowDown";
import ArrowUp from "@svg/ArrowUp";
import Pix from "@svg/Pix";
import React from "react";
import { Alert, ScrollView } from "react-native";

interface IOption {
  type: string;
  icon: Function;
  title: string;
  onPress: () => void;
}

const CardsSection: React.FC = () => {
  const options: IOption[] = [
    {
      type: "PIX",
      icon: Pix,
      title: "PIX",
      onPress: onPixPress,
    },
    {
      type: "DEPOSIT",
      icon: ArrowUp,
      title: "Depositar",
      onPress: onDepositPress,
    },
    {
      type: "WITHDRAW",
      icon: ArrowDown,
      title: "Sacar",
      onPress: onWithdrawPress,
    },
  ];

  function onPixPress() {
    Alert.alert(
      "PIX",
      "Bem vindo(a) ao PIX, em breve você poderá fazer transações bem rápidas."
    );
  }

  function onDepositPress() {
    Alert.alert(
      "Depósito",
      "Ei, estamos trabalhando a todos vapor para disponibilizar a funcionaldiade de depósito."
    );
  }

  function onWithdrawPress() {
    Alert.alert(
      "Saque",
      "Ei, estamos trabalhando a todos vapor para disponibilizar a funcionaldiade de saque."
    );
  }

  return (
    <Container mt={40}>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}
      >
        {options.map((option, index: number) => (
          <Container ml={index !== 0 ? 8 : 0}>
            <Card
              Icon={option.icon}
              title={option.title}
              onPress={option.onPress}
            />
          </Container>
        ))}
      </ScrollView>
    </Container>
  );
};

export default CardsSection;
