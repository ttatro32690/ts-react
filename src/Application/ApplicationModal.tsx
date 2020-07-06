import React, { useContext } from "react";
import { GlobalContext } from "../app";
import { Modal, Button } from "react-bootstrap";
import { SupplierWidget } from "../components/Supplier";
import {
  ProductsSummary,
  HandleProductSummaryClick
} from "../components/Products";

type HandleModalClose = () => void;

const ApplicationModal = () => {
  const {
    applicationState: { globalState },
    applicationDispatch
  } = useContext(GlobalContext);

  const handleClose: HandleModalClose = () => {
    applicationDispatch({ type: "closeModal" });
  };

  const handleProductSummaryClick: HandleProductSummaryClick = ({ id }) => {
    applicationDispatch({ type: "removeProductFromOrder", payload: { id } });
  };

  return (
    <>
      <Modal show={globalState.isModalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <WrappedSupplierWidget />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductsSummary
            products={globalState.productSummary}
            handleClick={handleProductSummaryClick}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const WrappedSupplierWidget = () => {
  const {
    applicationState: {
      globalState: { supplier }
    }
  } = useContext(GlobalContext);
  return <SupplierWidget {...supplier} />;
};

export { ApplicationModal };
