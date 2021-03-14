import {
  ITransaction,
  ITransactionResponse,
} from "@redux/ducks/user/user.types";

class Transaction implements ITransaction {
  id: string;
  date: string;
  description: string;
  amount: number;

  constructor({ _id, date, description, amount }: ITransactionResponse) {
    this.id = _id;
    this.date = date;
    this.description = description;
    this.amount = Number(amount);
  }
}

export default Transaction;
