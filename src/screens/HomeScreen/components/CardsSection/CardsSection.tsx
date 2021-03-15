import React from "react";
import { ScrollView } from "react-native";

import Card from "@components/Card";
import Container from "@components/Container";
import ArrowDown from "@svg/ArrowDown";
import ArrowUp from "@svg/ArrowUp";
import Pix from "@svg/Pix";
import { useModal } from "@components/providers/ModalProvider/ModalProvider";

interface IOption {
  type: string;
  icon: Function;
  title: string;
  onPress: () => void;
}

const CardsSection: React.FC = () => {
  const { showModal } = useModal();

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
    showModal({
      title: "PIX",
      description:
        "Bem vindo(a) ao PIX, em breve você poderá fazer transações bem rápidas",
    });
  }

  function onDepositPress() {
    showModal({
      title: "Depósito",
      description:
        "Ei, estamos trabalhando a todos vapor para disponibilizar a funcionaldiade de depósito",
    });
  }

  function onWithdrawPress() {
    showModal({
      title: "Saque",
      description:
        "Ei, estamos trabalhando a todos vapor para disponibilizar a funcionaldiade de saque",
    });
  }

  return (
    <Container height={144}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          alignItems: "center",
          height: 144,
        }}
      >
        {options.map((option, index: number) => (
          <Container key={option.type} ml={index !== 0 ? 8 : 0}>
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
