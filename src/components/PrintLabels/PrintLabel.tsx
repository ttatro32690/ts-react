import React, { useContext } from "react";
import { PrintLabels } from "./types";
import { createApplicationContext } from "../../GlobalState/createApplicationContext";

const PrintLabelsContext = createApplicationContext<PrintLabels>(undefined);

const WithPrintLabelsContext = () => {
  const mockLabelData = useContext(PrintLabelsContext);
  return (
    <>
      <PrintLabelData {...mockLabelData} />
    </>
  );
};

const PrintLabelData = (props: PrintLabels) => {
  return (
    <>
      {props.labels.map(({ id }) => {
        return <div key={id}>{id}</div>;
      })}
    </>
  );
};

export { WithPrintLabelsContext, PrintLabelsContext };
