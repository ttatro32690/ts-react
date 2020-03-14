import React, { useReducer } from "react";
import { ApplicationContainer } from "./ApplicationContainer";
import {
  Reducer,
  GlobalState,
  createApplicationContext
} from "./GlobalState";

type State = {};

type Action = { type: "default" } | {type: 'newOrder', payload: {id: 'test'}};

const applicationReducer: Reducer<State, Action> = (
  state,
  action
) => {
  switch (action.type) {
    default:
      return state;
  }
};

const initializer: GlobalState<State> = {
  supplierId: 1,
  fulfillmentCustomerId: 1,
  isAdmin: true,
  globalState: {}
};

const GlobalContext = createApplicationContext({
  applicationState: undefined,
  applicationDispatch: undefined
});

const App = () => {
  const [applicationState, applicationDispatch] = useReducer(applicationReducer, initializer);

  return (
    <>
      <GlobalContext.Provider
        value={{ applicationState, applicationDispatch }}
      >
        <ApplicationContainer />
      </GlobalContext.Provider>
    </>
  );
};

export { App };
