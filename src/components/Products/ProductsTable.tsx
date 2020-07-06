import React, { useState, ChangeEvent } from "react";
import { Product } from "./types";
import { Button, FormControl, InputGroup, Table } from "react-bootstrap";
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
              <ProductRow
                key={product.id}
                product={product}
                handleClick={handleClick}
              />
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

interface ProductRowProps {
  product: Product;
  handleClick?: HandleProductAddClick;
}

const ProductRow = ({ product, handleClick }: ProductRowProps) => {
  const [stateProduct, setStateProduct] = useState(product);
  const [recommendedQuantity, setRecommendedQuantity] = useState(
    product.recommendedQuantity
  );

  const handleFormControlChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStateProduct({
      ...stateProduct,
      recommendedQuantity: parseInt(e.target.value)
    });
    setRecommendedQuantity(parseInt(e.target.value));
  };

  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.description}</td>
      <td>{product.onHand}</td>
      <td>{product.onOrder}</td>
      <td>{product.recommendedQuantity}</td>
      <td>
        {handleClick && (
          <>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <Button
                  onClick={() => {
                    handleClick({
                      product: stateProduct
                    });
                  }}
                  outline-secondary="true"
                >
                  Add
                </Button>
              </InputGroup.Prepend>
              <FormControl
                value={recommendedQuantity.toString()}
                onChange={handleFormControlChange}
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </>
        )}
      </td>
    </tr>
  );
};

export { ProductsTable, HandleProductAddClick };
