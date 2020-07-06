import React from "react";
import { Product } from "./types";
import { Button, Table } from "react-bootstrap";
import { HandleProductSummaryClick } from "./types";

interface Props {
  products: Product[];
  handleClick?: HandleProductSummaryClick;
}

const ProductsSummary = ({ products, handleClick }: Props) => {
  return (
    <>
      <h2>SKU List</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>SKU</th>
            <th>Description</th>
            <th>Order Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ id, description, recommendedQuantity }) => {
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{description}</td>
                <td>{recommendedQuantity}</td>
                <td>
                  {handleClick && (
                    <Button
                      onClick={() => {
                        handleClick({ id });
                      }}
                    >
                      X
                    </Button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export { ProductsSummary };
