export const UserActions = {
  GET_USER: "GET_USER",
};

export const UserReducers = {
  UPDATE_STATE: "USER/UPDATE_STATE",
};

export interface ITransactionResponse {
  _id: string;
  date: string;
  description: string;
  amount: string;
}

export interface IUserResponse {
  _id: string;
  name: string;
  balance: string;
  transactions: ITransactionResponse[];
}

export interface ITransaction {
  id: string;
  date: string;
  description: string;
  amount: number;
}

export interface IUser {
  id: string;
  name: string;
  balance: number;
  transactions: ITransaction[];
}
