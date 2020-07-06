import { Product } from "./types";

const mockProductData: Product[] = [
  {
    id: "SKU-1",
    description: "Rug",
    onHand: 14,
    onOrder: 0,
    recommendedQuantity: 12
  },
  {
    id: "SKU-2",
    description: "Table",
    onHand: 1,
    onOrder: 1,
    recommendedQuantity: 3
  },
  {
    id: "SKU-3",
    description: "Chair",
    onHand: 3,
    onOrder: 1,
    recommendedQuantity: 2
  },
  {
    id: "SKU-4",
    description: "Dining Set",
    onHand: 14,
    onOrder: 12,
    recommendedQuantity: 0
  },
  {
    id: "SKU-5",
    description: "Dish Rack",
    onHand: 1,
    onOrder: 1,
    recommendedQuantity: 0
  },
  {
    id: "SKU-6",
    description: "Bed Frame",
    onHand: 46,
    onOrder: 4,
    recommendedQuantity: 12
  }
];

export { mockProductData };
