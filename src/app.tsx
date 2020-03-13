import React, { useState, useReducer } from "react";
import { Hello } from "./components/Hello";
import { createApplicationContext } from "./createContext";
import {
  PrintLabels,
  mockData as mockLabelData
} from "./components/PrintLabels";
import { Order, mockData as mockOrderData } from "./components/Orders";

type State = {
  printLabels: PrintLabels;
  orderData: Order[];
};
type Action = { type: "add" } | { type: "reset" };

const initializer: State = {
  printLabels: mockLabelData,
  orderData: mockOrderData
};

const applicationReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        printLabels: {
          ...state.printLabels,
          labels: [
            ...state.printLabels.labels,
            {
              id: "1",
              previouslyPrinted: true
            }
          ]
        }
      };
    case "reset":
      return { printLabels: mockLabelData, orderData: mockOrderData };
    default:
      throw new Error();
  }
};

const PrintLabelsContext = createApplicationContext<PrintLabels>(undefined);
const ShowOrdersContext = createApplicationContext<Order[]>(undefined);
const ApplicationDispatchContext = createApplicationContext<Function>(
  applicationReducer
);

const App = () => {
  const [applicationState, applicationDispatch] = useReducer(
    applicationReducer,
    initializer
  );

  const handleClick = () => {
    applicationDispatch({ type: "add" });
  };

  return (
    <>
      <button onClick={handleClick}>Add More Rows!</button>
      <ApplicationDispatchContext.Provider value={applicationDispatch}>
        <PrintLabelsContext.Provider value={applicationState.printLabels}>
          <ShowOrdersContext.Provider value={applicationState.orderData}>
            <Hello />
          </ShowOrdersContext.Provider>
        </PrintLabelsContext.Provider>
      </ApplicationDispatchContext.Provider>
    </>
  );
};

export {
  App,
  PrintLabelsContext,
  ShowOrdersContext,
  ApplicationDispatchContext
};
