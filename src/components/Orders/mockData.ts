import { Order, OrderStatus, DestinationWarehouse } from "./types";

const mockData: Order[] = [
  {
    id: "WHS-123",
    status: OrderStatus.Received,
    destinationWarehouse: DestinationWarehouse.Cranberry,
    sourceWarehouse: "California",
    expectedShipDate: "12/20/2020"
  },
  {
    id: "WHS-121",
    status: OrderStatus.Cancelled,
    destinationWarehouse: DestinationWarehouse.Hebron,
    sourceWarehouse: "New Jersey",
    expectedShipDate: "2/20/2020"
  }
];

export {mockData};