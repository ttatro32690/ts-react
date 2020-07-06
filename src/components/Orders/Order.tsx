import React, { useContext, ReactNode } from "react";
import { Order } from "./types";
import { createApplicationContext } from "../../GlobalState/createApplicationContext";

const ShowOrdersContext = createApplicationContext<Order[]>(undefined);

type WithShowOrdersContextType = () => ReactNode;

const WithShowOrdersContext: WithShowOrdersContextType = () => {
  const showOrders = useContext(ShowOrdersContext);

  return (
    <>
      <ShowOrders {...showOrders} />
    </>
  );
};

const ShowOrders = (props: Order[]) => {
  return (
    <>
      <div>Test</div>
    </>
  );
};

export { WithShowOrdersContext, ShowOrders, ShowOrdersContext };
