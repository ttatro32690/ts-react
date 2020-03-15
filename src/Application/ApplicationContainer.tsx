import React, { useContext } from "react";
import { GlobalContext } from "../app";
import { Button, Col, Row } from "react-bootstrap";
import { mockProductData } from "../components/Products";
import { ProductsTable, HandleProductAddClick } from "../components/Products";

const ApplicationContainer = () => {
  const { applicationDispatch } = useContext(GlobalContext);

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
            products={mockProductData}
            handleClick={handleProductTableClick}
          />
        </Col>

        <Col>
          <h2>Order Summary</h2>
          <Row>
            <Col>
              <Button onClick={handleOrderSummaryClick}>Review Order!</Button>
            </Col>
            <Col>
              <Button
                onClick={() => {
                  applicationDispatch({ type: "addAllRecommended" });
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
