export interface PreviewContextType {
  setPreviewOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handlePreviewOpen: () => void;
  handlePreviewClose: () => void;
  previewOpen: boolean;
}

export interface BasisModel {
  id: number;
  basis: string;
  unit: number;
  rate: string;
  amount: string;
}

export interface SectionModel {
  id: number;
}

interface Currency {
  currency: string;
  exchange_rate: number;
  is_base_currency: boolean;
  customer_currency: string;
}

interface SectionData {
  basis: string;
  unit_of_measurement: string;
  unit: number;
  rate: number;
  amount: number;
}

interface Section {
  section_name: string;
  section_number: number;
  section_currency: Currency;
  section_data: SectionData[];
}

export interface Quote {
  quote_title: string;
  quote_date: string; // Use `string` type for date in ISO format
  sections: Section[];
}

export interface TableData {
  basis: string;
  uom: string;
  unit: string;
  rate: string;
  amount: string;
}
