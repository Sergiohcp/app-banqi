import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import userReducers from "@redux/ducks/user/user.reducers";
import userActions from "@redux/ducks/user/user.actions";
import Reactotron from "../../ReactotronConfig";
import User from "domain/User";

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  user: userReducers,
});

const store = createStore(
  reducers,
  compose(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer())
);

sagaMiddleware.run(userActions);

export default store;

export interface AppState {
  user: User;
}
