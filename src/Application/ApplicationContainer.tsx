import React, { useContext, useState } from "react";
import { GlobalContext } from "../app";
import { Button, Col, Row } from "react-bootstrap";
import { mockProductData } from "../components/Products";
import {
  ProductsTable,
  ProductsSummary,
  HandleProductAddClick
} from "../components/Products";

const ApplicationContainer = () => {
  const { applicationState, applicationDispatch } = useContext(GlobalContext);
  // Fake a useQuery fetch (kind of?)
  const [products] = useState(mockProductData);

  const handleOrderSummaryClick = () => {
    applicationDispatch({ type: "openModal" });
  };

  const handleProductTableClick: HandleProductAddClick = ({ product }) => {
    applicationDispatch({
      type: "addProductToOrder",
      payload: { product }
    });
  };

  return (
    <>
      <br></br>
      <Row>
        <Col>
          <ProductsTable
            products={products}
            handleClick={handleProductTableClick}
          />
        </Col>
        <Col>
          <h2>Order Summary</h2>
          <Row>
            <ProductsSummary
              products={applicationState.globalState.productSummary}
            />
          </Row>
          <Row>
            <Col>
              <Button onClick={handleOrderSummaryClick}>Review Order!</Button>
            </Col>
            <Col>
              <Button
                onClick={() => {
                  applicationDispatch({
                    type: "addAllRecommended",
                    payload: { products }
                  });
                }}
              >
                Add All Recommended
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export { ApplicationContainer };
