import { AppState } from "@redux/config";

export const getLoadingSelector = (type: string) => (state: AppState) =>
  state.loading[type];
