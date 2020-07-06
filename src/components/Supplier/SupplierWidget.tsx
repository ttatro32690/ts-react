import React from "react";
import { SupplierProps } from "./types";

const SupplierWidget = ({ name, countryOfOrigin }: SupplierProps) => {
  return (
    <>
      <div>{`${name} - ${countryOfOrigin}`}</div>
    </>
  );
};

export { SupplierWidget };
