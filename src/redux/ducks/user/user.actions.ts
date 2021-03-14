import { takeLatest } from "redux-saga/effects";

import { UserActions } from "./user.types";

function* getUser() {
  console.tron.log("PASSOU AQUI NA ACTION");
}

function* sagas() {
  yield takeLatest(UserActions.GET_USER, getUser);
}

export default sagas;
