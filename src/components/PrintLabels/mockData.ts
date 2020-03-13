import { PrintLabels } from "./interface";

const mockData: PrintLabels = {
  supplierId: 1,
  numberOfLabels: 12,
  labels: [
    {
      id: "wfs-1",
      previouslyPrinted: true
    },
    {
      id: "wfs-2",
      description: "this is a label for a table",
      previouslyPrinted: false
    },
    {
      id: "wfs-3",
      description: "this is another label for a cable",
      previouslyPrinted: true
    }
  ]
};

export { mockData };
