import React, { useState } from "react";
import { useSelector } from "react-redux";

import Container from "@components/Container";
import { Text } from "@components/Text";
import Touchable from "@components/Touchable";
import { getUserSelector } from "@redux/ducks/user/user.selectors";
import EyeOutline from "@svg/EyeOutline";
import { useModal } from "@providers/ModalProvider";

const BalanceSection: React.FC = () => {
  const { showModal } = useModal();
  const user = useSelector(getUserSelector);

  const [showValue, setShowValue] = useState(false);
  const [shouldShowModal, setShouldShowModal] = useState(true);

  function onBalancePress() {
    if (shouldShowModal) {
      showModal({
        title: "Saldo",
        description:
          "Lembre-se que seu saldo está visível, olhe sempre ao redor.",
      });
      setShouldShowModal(false);
    }
    setShowValue(!showValue);
  }

  return (
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
        <Touchable type="WithoutFeedback" onPress={onBalancePress}>
          <Container ml={12}>
            <EyeOutline visible={showValue} />
          </Container>
        </Touchable>
      </Container>
    </Container>
  );
};

export default BalanceSection;
