import React from "react";
import { Product } from "./types";
import { Button, Table } from "react-bootstrap";
import { HandleProductAddClick } from "./types";

interface Props {
  products: Product[];
  handleClick?: HandleProductAddClick;
}

const ProductsTable = ({ products, handleClick }: Props) => {
  return (
    <>
      <h2>SKU List</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>SKU</th>
            <th>Description</th>
            <th>On-Hand</th>
            <th>On-Order</th>
            <th>Recommended Quantity</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.description}</td>
                <td>{product.onHand}</td>
                <td>{product.onOrder}</td>
                <td>{product.recommendedQuantity}</td>
                <td>
                  {handleClick && (
                    <Button
                      onClick={() => {
                        handleClick({
                          product
                        });
                      }}
                    >
                      Add
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

export { ProductsTable, HandleProductAddClick };
