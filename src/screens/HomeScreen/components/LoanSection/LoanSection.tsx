import React from "react";

import Container from "@components/Container";
import { Text } from "@components/Text";
import Touchable from "@components/Touchable";
import Loan from "@svg/Loan";
import { useModal } from "@providers/ModalProvider";

const LoanSection: React.FC = () => {
  const { showModal } = useModal();

  function onLoanPress() {
    showModal({
      title: "Empréstimo pessoal",
      description: "Legal, temos um empréstimo incrível para você!",
    });
  }
  return (
    <Touchable onPress={onLoanPress}>
      <Container
        flexDirection="row"
        alignSelf="center"
        alignItems="center"
        bgColor="white"
        borderRadius={4}
        shadow
        p={16}
        mh={20}
      >
        <Loan />
        <Container flex={1} justifyContent="center" ml={12}>
          <Text fontSize={14} fontWeight="bold">
            Empréstimo pessoal
          </Text>
          <Text fontWeight="bold" opacity={0.5} mt={2}>
            Você tem R$ 500 pré-aprovados!
          </Text>
        </Container>
      </Container>
    </Touchable>
  );
};

export default LoanSection;
