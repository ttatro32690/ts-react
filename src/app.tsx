import React, { useReducer } from "react";
import { ApplicationContainer, ApplicationModal } from "./Application";
import { Reducer, GlobalState, createApplicationContext } from "./GlobalState";
import { State, Action } from "./types";
import { SupplierHeader, Countries } from "./components/Supplier";
import { Container } from "react-bootstrap";

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
    case "addProductToOrder":
      return {
        ...state,
        globalState: {
          ...state.globalState,
          productSummary: [
            ...state.globalState.productSummary,
            action.payload.product
          ]
        }
      };
    case "removeProductFromOrder":
      return {
        ...state,
        globalState: {
          ...state.globalState,
          productSummary: state.globalState.productSummary.filter(({ id }) => {
            action.payload.id !== id;
          })
        }
      };
    case "addAllRecommended":
      return {
        ...state,
        globalState: {
          ...state.globalState,
          productSummary: state.globalState.productSummary.filter(
            ({ recommendedQuantity }) => recommendedQuantity
          )
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
    supplier: {
      name: "Tatro Test Supplier",
      countryOfOrigin: Countries.US
    },
    productSummary: []
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
      <Container fluid>
        <SupplierHeader
          {...applicationState.globalState.supplier}
          identifiers={{
            supplierId: applicationState.supplierId,
            fulfillmentCustomerId: applicationState.fulfillmentCustomerId
          }}
        />
        <ApplicationContainer />
        <ApplicationModal />
      </Container>
    </GlobalContext.Provider>
  );
};

export { App, GlobalContext };
