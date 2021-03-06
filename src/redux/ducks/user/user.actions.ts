import { call, delay, put, takeLatest } from "redux-saga/effects";
import { LoadingReducers } from "../loading/loading.types";

import { getUserService } from "./user.services";
import { IUserResponse, UserActions, UserReducers } from "./user.types";

export function* getUser() {
  yield put({
    type: LoadingReducers.UPDATE_STATE,
    payload: {
      GET_USER: true,
    },
  });

  const user: IUserResponse = yield call(getUserService);

  yield delay(500);

  yield put({
    type: UserReducers.UPDATE_STATE,
    payload: user,
  });
  yield put({
    type: LoadingReducers.UPDATE_STATE,
    payload: {
      GET_USER: false,
    },
  });
}

function* sagas() {
  yield takeLatest(UserActions.GET_USER, getUser);
}

export default sagas;
