import React from "react";
import { Container } from "react-bootstrap";
import { SupplierProps } from "./types";

const SupplierHeader = ({
  name,
  countryOfOrigin,
  identifiers
}: SupplierProps) => {
  return (
    <>
      <h2>Welcome: {name}</h2>
      <h3>{countryOfOrigin}</h3>
      <Container fluid>
        <div>
          {Object.keys(identifiers).map(key => {
            return <div key={key}>{`${key}: ${identifiers[key]}`}</div>;
          })}
        </div>
      </Container>
    </>
  );
};

export { SupplierHeader };
