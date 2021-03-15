import Container from "@components/Container";
import { Text } from "@components/Text";
import Touchable from "@components/Touchable";
import TransactionItem from "@components/TransactionItem";
import { getUserSelector } from "@redux/ducks/user/user.selectors";
import ArrowDown from "@svg/ArrowDown";
import React, { useState } from "react";
import { Dimensions, FlatList, ScrollView } from "react-native";
import { useSelector } from "react-redux";

const TransactionsSection: React.FC = () => {
  const user = useSelector(getUserSelector);

  const [showAllTransactions, setShowAllTransacions] = useState(false);

  const transactions = showAllTransactions
    ? user.transactions
    : user.firstThreeTransactions();

  return (
    <Container flex={1} pt={32} mt={32}>
      <Container ph={20}>
        <Text fontSize={14}>Histórico de transações</Text>
      </Container>
      <Container flex={1} mt={12} bgColor={"pink"}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            width: Dimensions.get("screen").width,
            paddingHorizontal: 20,
          }}
        >
          {transactions.map((transaction, index) => (
            <Container>
              <TransactionItem
                description={transaction.description}
                date={transaction.dateFormated()}
                amount={transaction.amountCurrency()}
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
      <Touchable onPress={() => setShowAllTransacions(true)}>
        <Container mt={12} mb={17} alignSelf={"flex-end"}>
          <Text fontSize={14} fontWeight="bold" color="cyan">
            VER MAIS
          </Text>
        </Container>
      </Touchable>
    </Container>
  );
};

export default TransactionsSection;
