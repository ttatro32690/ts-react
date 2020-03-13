import React, { useContext } from "react";
import {
  ShowOrdersContext,
  ApplicationDispatchContext
} from "../app";

import { WithPrintLabelsContext } from "../components/PrintLabels";

export interface HelloProps {
  compiler: string;
  framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export const Hello = () => {
  return (
    <>
      <FakeComponentForTree />
    </>
  );
};

const FakeComponentForTree = () => {
  const {applicationDispatch} = useContext(ApplicationDispatchContext);

  const handleClick = () => {
    applicationDispatch({ type: "add" });
  };

  return (
    <>
      <button onClick={handleClick}>Nested Rows!</button>
      <FakeComponentForTree2 />
    </>
  );
};

const FakeComponentForTree2 = () => {
  const {applicationDispatch} = useContext(ApplicationDispatchContext);
  const mockOrderData = useContext(ShowOrdersContext);

  const handleClick = () => {
    applicationDispatch({ type: "reset" });
  };

  return (
    <>
      {mockOrderData.map(({ id }) => {
        return <div key={id}>{id}</div>;
      })}
      {applicationDispatch ? (
        <button onClick={handleClick}>More Context Rows?!</button>
      ) : (
        <span>No Function Available</span>
      )}
      <WithPrintLabelsContext />
    </>
  );
};
