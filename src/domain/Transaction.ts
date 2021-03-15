import {
  ITransaction,
  ITransactionResponse,
} from "@redux/ducks/user/user.types";
import moment from "moment";
import { Platform } from "react-native";

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

  amountCurrency() {
    let amount = Math.abs(this.amount).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

    if (Platform.OS === "android") {
      amount = `R$ ${amount}`;
    }

    return `${this.amount > 0 ? "+" : "-"} ${amount}`;
  }

  dateFormated() {
    return moment(this.date).format("DD/MM/YYYY");
  }
}

export default Transaction;
