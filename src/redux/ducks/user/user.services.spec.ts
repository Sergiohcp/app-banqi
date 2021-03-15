import banQiApi from "@utils/banQiApi";
const mockUser = require("@mocks/user.json");

import { getUserService } from "./user.services";

describe("User services test", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    banQiApi.get = jest.fn();
  });

  it("should call getUserService function and return user data", async () => {
    banQiApi.get.mockImplementationOnce(() => Promise.resolve({ data: {} }));

    const user = await getUserService();

    expect(user).toEqual(mockUser);
    expect(banQiApi.get).toHaveBeenCalledTimes(1);
    expect(banQiApi.get).toHaveBeenCalledWith("/banqi.com.br");
  });
});
