import React, { useContext, useState } from "react";
import {
  ShowOrdersContext,
  PrintLabelsContext,
  ApplicationDispatchContext
} from "../app";

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
  const applicationDispatch = useContext(ApplicationDispatchContext);

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
  const applicationDispatch = useContext(ApplicationDispatchContext);

  const handleClick = () => {
    applicationDispatch({ type: "reset" });
  };

  return (
    <>
    {applicationDispatch ? <button onClick={handleClick}>More Context Rows?!</button> : <span>No Function Available</span>}
      <FakeComponentForTree3 />
    </>
  );
};

const FakeComponentForTree3 = () => {
  const mockOrderData = useContext(ShowOrdersContext);
  const mockLabelData = useContext(PrintLabelsContext);
  return (
    <>
      {mockOrderData.map(({ id }) => {
        return <div key={id}>{id}</div>;
      })}
      {mockLabelData.labels.map(({ id }) => {
        return <div key={id}>{id}</div>;
      })}
    </>
  );
};
