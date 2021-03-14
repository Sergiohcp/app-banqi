import { AppState } from "@redux/config";

export const getUserSelector = (type: string) => (state: AppState) =>
  state.loading[type];
