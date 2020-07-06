enum OrderStatus {
  "Submitted",
  "In-Transit",
  "Cancelled",
  "Partially-Received",
  "Received"
}

enum DestinationWarehouse {
  "Cranberry",
  "Hebron",
  "Perris"
}

interface Order {
  id: string;
  status: OrderStatus;
  destinationWarehouse: DestinationWarehouse;
  sourceWarehouse: string;
  expectedShipDate: string;
}

export { Order, OrderStatus, DestinationWarehouse };
