import User from "domain/User";
import { UserReducers } from "./user.types";

export const INITIAL_STATE: User = new User({
  _id: "",
  name: "",
  balance: "",
  transactions: [],
});

export default (
  state = INITIAL_STATE,
  action: { type: string; payload: any }
): any => {
  switch (action.type) {
    case UserReducers.UPDATE_STATE:
      return new User({ ...state, ...action.payload });
    default:
      return state;
  }
};
