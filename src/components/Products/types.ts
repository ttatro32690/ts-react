interface Product {
  id: string;
  description: string;
  onHand: number;
  onOrder: number;
  recommendedQuantity: number;
}

interface HandleClickArgs {
  product: Product;
}
type HandleProductAddClick = ({ product }: HandleClickArgs) => void;

interface ProductSummaryClickArgs {
  id: Product["id"];
}

type HandleProductSummaryClick = ({ id }: ProductSummaryClickArgs) => void;

export { Product, HandleProductAddClick, HandleProductSummaryClick };
