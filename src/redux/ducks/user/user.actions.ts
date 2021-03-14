import { call, put, takeLatest } from "redux-saga/effects";

import { getUserService } from "./user.services";
import { IUserResponse, UserActions, UserReducers } from "./user.types";

function* getUser() {
  const user: IUserResponse = yield call(getUserService);
  yield put({
    type: UserReducers.UPDATE_STATE,
    payload: user,
  });
}

function* sagas() {
  yield takeLatest(UserActions.GET_USER, getUser);
}

export default sagas;
