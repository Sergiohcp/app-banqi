import { IUser, IUserResponse } from "@redux/ducks/user/user.types";
import moment from "moment";

import Transaction from "./Transaction";

class User implements IUser {
  id: string;
  name: string;
  balance: number;
  transactions: Transaction[];

  // PT: Esse sort é para listar as transações da mais atual para a mais antiga
  // EN: This sort is to list transactions from the most current to the oldest
  constructor({ _id, name, balance, transactions }: IUserResponse) {
    this.id = _id;
    this.name = name;
    this.balance = Number(balance);
    this.transactions = transactions
      .map((transaction) => new Transaction(transaction))
      .sort((a, b) => {
        if (moment(a.date).isAfter(b.date)) {
          return -1;
        }
        return 0;
      });
  }

  balanceCurrency() {
    return this.balance.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }

  firstThreeTransactions() {
    return this.transactions.filter((_, index) => index < 3);
  }
}

export default User;
