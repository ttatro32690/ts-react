interface LabelData {
  id: string;
  description?: string;
  previouslyPrinted: boolean;
}

interface PrintLabels {
  supplierId: number;
  numberOfLabels: number;
  labels: LabelData[];
}

export { PrintLabels };
