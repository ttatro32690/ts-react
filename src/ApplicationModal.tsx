import React, { useContext, ReactNode } from "react";
import { GlobalContext } from "./app";
import { Modal, Button } from "react-bootstrap";

const ApplicationModal = () => {
  const {
    applicationState: { globalState },
    applicationDispatch
  } = useContext(GlobalContext);

  const handleClose = () => {
    applicationDispatch({ type: "closeModal" });
  };

  return (
    <ModalExample name={globalState.name} isModalOpen={globalState.isModalOpen} onClose={handleClose} />
  );
};

interface ModalProps {
  name: any;
  isModalOpen: boolean;
  onClose: () => void;
}

const ModalExample = ({ name, isModalOpen, onClose }: ModalProps) => {
  return (
    <Modal show={isModalOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{name.firstName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{name.userName}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export { ApplicationModal };
