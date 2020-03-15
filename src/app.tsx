import React, { useReducer, Dispatch } from "react";
import { ApplicationContainer, Name } from "./ApplicationContainer";
import { ApplicationModal } from "./ApplicationModal";
import { Reducer, GlobalState, createApplicationContext } from "./GlobalState";

type State = {
  isModalOpen: boolean;
  name: Name;
};

type Action =
  | { type: "default" }
  | { type: "openModal" }
  | { type: "closeModal" }
  | { type: "selectName"; payload: { name: Name } };

const applicationReducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "openModal":
      return {
        ...state,
        globalState: { ...state.globalState, isModalOpen: true }
      };
    case "closeModal":
      return {
        ...state,
        globalState: { ...state.globalState, isModalOpen: false }
      };
    case "selectName":
      return {
        ...state,
        globalState: {
          ...state.globalState,
          name: action.payload.name
        }
      };
    default:
      return state;
  }
};

const initializer: GlobalState<State> = {
  supplierId: 1,
  fulfillmentCustomerId: 1,
  isAdmin: true,
  globalState: {
    isModalOpen: false,
    name: {
      id: 0,
      firstName: undefined,
      lastName: undefined,
      userName: undefined
    }
  }
};

const GlobalContext = createApplicationContext({
  applicationState: initializer,
  applicationDispatch: undefined
});

const App = () => {
  const [applicationState, applicationDispatch] = useReducer(
    applicationReducer,
    initializer
  );

  return (
    <GlobalContext.Provider value={{ applicationState, applicationDispatch }}>
      <ApplicationContainer />
      <ApplicationModal />
    </GlobalContext.Provider>
  );
};

export { App, GlobalContext };
