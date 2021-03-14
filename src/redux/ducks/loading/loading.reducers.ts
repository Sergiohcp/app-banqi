import User from "domain/User";
import { LoadingReducers, ILoadingInitialState } from "./loading.types";

export const INITIAL_STATE: ILoadingInitialState = {
  GET_USER: false,
};

export default (
  state = INITIAL_STATE,
  action: { type: string; payload: any }
): any => {
  switch (action.type) {
    case LoadingReducers.UPDATE_STATE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
