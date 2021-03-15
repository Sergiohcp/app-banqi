import { AppState } from "@redux/config";
import User from "domain/User";
const mockUser = require("@mocks/user.json");

import { getUserSelector } from "./user.selectors";

const appState: AppState = {
  user: new User(mockUser),
  loading: {
    GET_USER: false,
  },
};

describe("User selectors test", () => {
  it("should call getUserSelector function and return user state", () => {
    expect(getUserSelector(appState)).toEqual(appState.user);
  });
});
