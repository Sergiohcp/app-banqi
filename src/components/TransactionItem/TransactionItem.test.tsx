import Transaction from "domain/Transaction";
import React from "react";
import renderer from "react-test-renderer";
import TransactionItem from "./TransactionItem";

const transaction = new Transaction({
  _id: "xy3e64ed-76154398-ah04-9dff23128f4a",
  date: "2021-01-14T16:30:00-03:00",
  description: "Cashback",
  amount: "13.27",
});

describe("TransactionItem test", () => {
  it("should take snapshot of component", () => {
    const tree = renderer
      .create(
        <TransactionItem
          description={transaction.description}
          date={transaction.dateFormated()}
          amount={transaction.amountCurrency()}
          onPress={() => {}}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
