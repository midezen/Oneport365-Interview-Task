import { BasisModel, SectionModel, TableData } from "./models";

export const BasisData: BasisModel[] = [
  {
    id: 1,
    basis: "Exportation Charges",
    unit: 12,
    rate: "$205.00",
    amount: "$410,028.00",
  },
  {
    id: 2,
    basis: "Exportation Charges",
    unit: 12,
    rate: "$205.00",
    amount: "$410,028.00",
  },
  {
    id: 3,
    basis: "Exportation Charges",
    unit: 12,
    rate: "$205.00",
    amount: "$410,028.00",
  },
];

export const SectionData: SectionModel[] = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

export const quoteBreakdownData: TableData[] = [
  {
    basis: "Freight Charges",
    uom: "Per Kilogram",
    unit: "610.00",
    rate: "$3.00",
    amount: "$1,830.00",
  },
  {
    basis: "Screening",
    uom: "Per Kilogram",
    unit: "610.00",
    rate: "$3.00",
    amount: "$1,830.00",
  },
  {
    basis: "Handling Charges",
    uom: "Per Shipment",
    unit: "1.00",
    rate: "$55.00",
    amount: "$55.00",
  },
  {
    basis: "Documentation",
    uom: "Per Shipment",
    unit: "1.00",
    rate: "$55.00",
    amount: "$55.00",
  },
  {
    basis: "Transfer Fee",
    uom: "Per Shipment",
    unit: "1.00",
    rate: "$175.00",
    amount: "$175.00",
  },
  {
    basis: "Pickup Fee",
    uom: "Per Kilogram",
    unit: "1.00",
    rate: "$255.00",
    amount: "$255.00",
  },
];

export const destinationChargesData: TableData[] = [
  {
    basis: "Estimate duty",
    uom: "Per Kilogram",
    unit: "610.00",
    rate: "₦3.00",
    amount: "₦1,830.00",
  },
  {
    basis: "Custom Clearance/Valuation",
    uom: "Per Kilogram",
    unit: "610.00",
    rate: "₦3.00",
    amount: "₦1,830.00",
  },
  {
    basis: "Stamp Duty",
    uom: "Per Consignment",
    unit: "1.00",
    rate: "₦55.00",
    amount: "₦55.00",
  },
  {
    basis: "Welfare",
    uom: "Per Consignment",
    unit: "1.00",
    rate: "₦55.00",
    amount: "₦55.00",
  },
  {
    basis: "Handling Charges",
    uom: "Per Consignment",
    unit: "1.00",
    rate: "₦175.00",
    amount: "₦175.00",
  },
  {
    basis: "FAAN",
    uom: "Per Consignment",
    unit: "1.00",
    rate: "₦255.00",
    amount: "₦255.00",
  },
  {
    basis: "Airline charges",
    uom: "Per Consignment",
    unit: "1.00",
    rate: "₦255.00",
    amount: "₦255.00",
  },
  {
    basis: "Transport to PH",
    uom: "Per Consignment",
    unit: "1.00",
    rate: "₦255.00",
    amount: "₦255.00",
  },
  {
    basis: "SON",
    uom: "Per Consignment",
    unit: "1.00",
    rate: "₦255.00",
    amount: "₦255.00",
  },
];
