import React, { useReducer } from "react";
import { Hello } from "./components/Hello";
import { createApplicationContext } from "./createContext";
import {
  PrintLabels,
  PrintLabelsContext,
  mockData as mockLabelData
} from "./components/PrintLabels";
import {
  Order,
  OrderStatus,
  DestinationWarehouse,
  mockData as mockOrderData
} from "./components/Orders";

type State = {
  printLabels: PrintLabels;
  orderData: Order[];
};

type OrderEntryState = {
  orders: Order[],
  products: {
    id: string;
  }
}

type ApplicationGlobalState<State> = {
  supplierId: number;
  fulfillmentCustomerId: number;
  features?: string[];
  isAdmin: boolean;
  applicationState: State;
}

type Action = { type: "add" } | { type: "reset" };

const initializer: ApplicationGlobalState<OrderEntryState> = {
  supplierId: 1,
  fulfillmentCustomerId: 1,
  isAdmin: true,
  applicationState: {
    products: {
      id: 'test'
    },
    orders: mockOrderData
  }
};



const applicationReducer = (state: ApplicationGlobalState<State>, action: Action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        orderData: [
          ...state.applicationState.orderData,
          {
            id: "WHS-123",
            status: OrderStatus.Received,
            destinationWarehouse: DestinationWarehouse.Cranberry,
            sourceWarehouse: "California",
            expectedShipDate: "12/20/2020"
          }
        ],
        printLabels: {
          ...state.applicationState.printLabels,
          labels: [
            ...state.applicationState.printLabels.labels,
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

const ShowOrdersContext = createApplicationContext<Order[]>(undefined);
const ApplicationDispatchContext = createApplicationContext<ApplicationGlobalState<State>>(
  initializer
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
      <ApplicationDispatchContext.Provider value={applicationState}>
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
