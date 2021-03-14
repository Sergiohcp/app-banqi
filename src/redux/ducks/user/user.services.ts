import banQiAPI from "@utils/banQiApi";
const mockUser = require("@mocks/user.json");

import { IUserResponse } from "./user.types";

// PT: Aqui é apenas uma simulação de uma requisição HTTP com axios
// EN: Here is just a simulation of an HTTP request with axios
export const getUserService = () =>
  banQiAPI.get<IUserResponse>("/banqi.com.br").then(() => mockUser);
