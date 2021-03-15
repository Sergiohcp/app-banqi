import User from "domain/User";
import createSagaMiddleware from "redux-saga";
import configureStore from "redux-mock-store";
import { call, delay, put } from "@redux-saga/core/effects";

import { LoadingReducers } from "@redux/ducks/loading/loading.types";
import banQiApi from "@utils/banQiApi";
const mockUser = require("@mocks/user.json");

import { UserActions, UserReducers } from "./user.types";
import { getUserService } from "./user.services";
import userActions, { getUser } from "./user.actions";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const mockStore = configureStore(middlewares);

const store = mockStore({
  user: new User(mockUser),
  loading: {
    GET_USER: false,
  },
});

sagaMiddleware.run(userActions);

const delayTime = async (t: number) =>
  new Promise((resolve) => setTimeout(resolve, t));

describe("User actions test", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    banQiApi.get = jest.fn();
  });
  it("should call getUser function and update state", async () => {
    banQiApi.get.mockImplementationOnce(() => Promise.resolve({ data: {} }));

    const expectedActions = [
      {
        type: UserActions.GET_USER,
      },
      {
        type: LoadingReducers.UPDATE_STATE,
        payload: {
          GET_USER: true,
        },
      },
      {
        type: UserReducers.UPDATE_STATE,
        payload: mockUser,
      },
      {
        type: LoadingReducers.UPDATE_STATE,
        payload: {
          GET_USER: false,
        },
      },
    ];

    store.dispatch({ type: UserActions.GET_USER });

    await delayTime(1000);

    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  it("should call getUser function and update state - generator", () => {
    const generator = getUser();

    let next = generator.next();
    expect(next.value).toEqual(
      put({
        type: LoadingReducers.UPDATE_STATE,
        payload: {
          GET_USER: true,
        },
      })
    );

    next = generator.next();
    expect(next.value).toEqual(call(getUserService));

    next = generator.next(mockUser);
    expect(next.value).toEqual(delay(500));

    next = generator.next();
    expect(next.value).toEqual(
      put({
        type: UserReducers.UPDATE_STATE,
        payload: mockUser,
      })
    );

    next = generator.next();
    expect(next.value).toEqual(
      put({
        type: LoadingReducers.UPDATE_STATE,
        payload: {
          GET_USER: false,
        },
      })
    );

    next = generator.next();
    expect(next.done).toEqual(true);
  });
});
