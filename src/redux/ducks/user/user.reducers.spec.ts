import { AppState } from "@redux/config";
import User from "domain/User";
const mockUser = require("@mocks/user.json");

import userReducer from "./user.reducers";
import { UserReducers } from "./user.types";

const initialState = new User({
  _id: "",
  name: "",
  balance: "",
  transactions: [],
});

const updateState = new User(mockUser);

describe("User reducers test", () => {
  it("should call user reducers and return initial state", () => {
    expect(userReducer(initialState, { type: "" })).toEqual(initialState);
  });

  it("should call user reducers and return update state", () => {
    expect(
      userReducer(initialState, {
        type: UserReducers.UPDATE_STATE,
        payload: mockUser,
      })
    ).toEqual(updateState);
  });
});
