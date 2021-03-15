import React from "react";

import Container from "@components/Container";
import { Text } from "@components/Text";
import ArrowDown from "@svg/ArrowDown";
import Touchable from "@components/Touchable";

interface ITransactionItem {
  description: string;
  date: string;
  amount: string;
  onPress: () => void;
}

const TransactionItem: React.FC<ITransactionItem> = ({
  description,
  date,
  amount,
  onPress,
}) => {
  return (
    <Touchable onPress={onPress}>
      <Container flexDirection="row" justifyContent="space-between">
        <Container flexDirection="row" alignItems="center">
          <ArrowDown />
          <Container ml={20}>
            <Text fontSize={14}>{description}</Text>
            <Text fontSize={14} color="green" mt={2}>
              Recebido em {date}
            </Text>
          </Container>
        </Container>
        <Container>
          <Text fontSize={14} color="green" textAlign="right" ml={20}>
            {amount}
          </Text>
        </Container>
      </Container>
    </Touchable>
  );
};

export default TransactionItem;
