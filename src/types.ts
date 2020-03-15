import { SupplierProps } from "./components/Supplier";
import { Product } from "./components/Products";

type State = {
  isModalOpen: boolean;
  productSummary: Product[];
  supplier: SupplierProps;
};

type Action =
  | { type: "default" }
  | { type: "openModal" }
  | { type: "closeModal" }
  | { type: "addAllRecommended" }
  | { type: "addProductToOrder"; payload: { product: Product } }
  | { type: "removeProductFromOrder"; payload: { id: Product["id"] } };

export { State, Action };
