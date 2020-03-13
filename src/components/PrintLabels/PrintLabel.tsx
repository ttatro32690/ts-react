import React, { useContext } from "react";
import { PrintLabels } from "./interface";
import { createApplicationContext } from "../../createContext";

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
