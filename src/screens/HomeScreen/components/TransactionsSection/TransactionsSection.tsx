import React, { useState } from "react";
import { Dimensions, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";

import Container from "@components/Container";
import { Text } from "@components/Text";
import Touchable from "@components/Touchable";
import TransactionItem from "@components/TransactionItem";
import { getUserSelector } from "@redux/ducks/user/user.selectors";
import Transaction from "domain/Transaction";

const TransactionsSection: React.FC = () => {
  const navigation = useNavigation();

  const user = useSelector(getUserSelector);

  const [showAllTransactions, setShowAllTransacions] = useState(false);

  const transactions = showAllTransactions
    ? user.transactions
    : user.firstThreeTransactions();

  function onTransactionPress(transaction: Transaction) {
    navigation.navigate("Transaction", { transaction });
  }

  return (
    <Container flex={1} pt={32} mt={32}>
      <Container ph={20}>
        <Text fontSize={14}>Histórico de transações</Text>
      </Container>
      <Container flex={showAllTransactions ? 1 : 0} height={200} mt={12}>
        <ScrollView
          style={{ flexGrow: 1 }}
          contentContainerStyle={{
            flexGrow: 1,
            width: Dimensions.get("screen").width,
            paddingHorizontal: 20,
            paddingBottom: showAllTransactions ? 12 : 0,
          }}
        >
          {transactions.map((transaction, index) => (
            <Container key={transaction.id}>
              <TransactionItem
                description={transaction.description}
                date={transaction.dateFormated()}
                amount={transaction.amountCurrency()}
                onPress={() => onTransactionPress(transaction)}
              />
              {index !== transactions.length - 1 && (
                <Container
                  width={2}
                  height={24}
                  bgColor={"gray"}
                  borderRadius={2}
                  ml={11}
                />
              )}
            </Container>
          ))}
        </ScrollView>
      </Container>
      {!showAllTransactions && (
        <Touchable onPress={() => setShowAllTransacions(true)}>
          <Container mv={12} mh={20} alignSelf={"flex-end"}>
            <Text fontSize={14} fontWeight="bold" color="cyan">
              VER MAIS
            </Text>
          </Container>
        </Touchable>
      )}
    </Container>
  );
};

export default TransactionsSection;
