export interface PreviewContextType {
  setPreviewOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handlePreviewOpen: () => void;
  handlePreviewClose: () => void;
  previewOpen: boolean;
}

export interface quoteToggleContextType {
  addNewBasis: boolean;
  setAddNewBasis: React.Dispatch<React.SetStateAction<boolean>>;
  addNewSection: boolean;
  setAddNewSection: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CurrencyInfo {
  currency: string;
  exchange_rate: number;
  is_base_currency: boolean;
  customer_currency: string;
}

interface SectionData {
  _id?: string;
  basis: string;
  unit_of_measurement: string;
  unit: number;
  rate: number;
  amount: number;
}

export interface SectionModel {
  section_currency: CurrencyInfo;
  _id?: string;
  section_name: string;
  section_number: number;
  section_data: SectionData[];
}

export interface Quote {
  _id?: string;
  quote_date: string;
  sections: SectionModel[];
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  quote_title?: string;
}

export interface TableData {
  basis: string;
  uom: string;
  unit: string;
  rate: string;
  amount: string;
}
