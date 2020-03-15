import React, { useContext } from "react";
import { GlobalContext } from "./app";
import { Button, Col, Row, Table } from "react-bootstrap";

export interface Name {
  id: number;
  firstName: string;
  lastName: string;
  userName: string;
}

interface HandleClick {
  name: Name;
}

const mockNames: Name[] = [
  {
    id: 1,
    firstName: "Mark",
    lastName: "Otto",
    userName: "@mdo"
  },
  {
    id: 2,
    firstName: "Jacob",
    lastName: "Thornton",
    userName: "@fat"
  },
  {
    id: 3,
    firstName: "Larry the Bird",
    lastName: "",
    userName: "@twitter"
  }
];

const ApplicationContainer = () => {
  const { applicationDispatch } = useContext(GlobalContext);

  const handleClick = ({ name }: HandleClick) => {
    applicationDispatch({ type: "selectName", payload: { name } });
    applicationDispatch({ type: "openModal" });
  };

  return <ApplicationTable onClick={handleClick} />;
};

interface ApplicationTableProps {
  onClick: ({ name }: HandleClick) => void;
}

const ApplicationTable = ({ onClick }: ApplicationTableProps) => {
  return (
    <Row>
      <Col>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {mockNames.map(({ id, firstName, lastName, userName }) => {
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{userName}</td>
                  <td>
                    <Button
                      onClick={() => {
                        onClick({ name: {id, firstName, lastName, userName} });
                      }}
                    >
                      Add
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Col>
      <Col></Col>
    </Row>
  );
};

export { ApplicationContainer };
