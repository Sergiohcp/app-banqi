import { IUser, IUserResponse } from "@redux/ducks/user/user.types";

import Transaction from "./Transaction";

class User implements IUser {
  id: string;
  name: string;
  balance: number;
  transactions: Transaction[];

  constructor({ _id, name, balance, transactions }: IUserResponse) {
    this.id = _id;
    this.name = name;
    this.balance = Number(balance);
    this.transactions = transactions.map(
      (transaction) => new Transaction(transaction)
    );
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
