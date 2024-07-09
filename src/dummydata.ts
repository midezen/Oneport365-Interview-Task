import { Quote, TableData } from "./models";

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

export const termsData = [
  {
    id: "1.",
    desc: "Above rates are for cargo details as provided by you.",
  },
  {
    id: "2.",
    desc: "Above quote is/are subject to VAT.",
  },
  {
    id: "3.",
    desc: "Above quoted reates are on Door-to-Door basis excludes of Duties at the time of exports.",
  },
  {
    id: "4.",
    desc: "Standard Trading Terms and Conditions of Oneport365 applies.",
  },
  {
    id: "5.",
    desc: "Above rates excludes services like packing, re-packing, Customs inspeciton etc which may be charged additional(if required) with prior customer approval.",
  },
  {
    id: "6.",
    desc: "Above rates do not cover insurance charges.",
  },
  {
    id: "7.",
    desc: "Above rates does not include any additional services required e.g - special handling, week-end pick-up/delivery which has not been agreed and same will be charged as mutually agreed before services are rendered.",
  },
  {
    id: "8.",
    desc: "Above rates apply for weight/volume (whichever is higher). Rates are based on ratio 1:6.",
  },
  {
    id: "9.",
    desc: "Quoted rates are valid for a period of one month and will need prior approval from Oneport365 incase any further extension is required.",
  },
  {
    id: "10.",
    desc: "Charges are based on shipment details provided by you: if quantity/weight will vary, our quotation will change accordingly.",
  },
  {
    id: "11.",
    desc: "Pricing team has the right to re-price if the actual cargo details defer from the information indicatedd in enquiry.",
  },
  {
    id: "12.",
    desc: "Unless otherwise specified, and haulage included withing the quote is based upon standard roadside only and between business hours Monday to Friday.",
  },
];

export const createData: Quote = {
  quote_date: "2024-06-18T00:00:00.000Z",
  sections: [
    {
      section_name: "Section 1",
      section_number: 1,
      section_currency: {
        currency: "NGN",
        exchange_rate: 100.45,
        is_base_currency: true,
        customer_currency: "USD",
      },
      section_data: [
        {
          basis: "Basis 1",
          unit_of_measurement: "Kilogram",
          unit: 10,
          rate: 5,
          amount: 50,
        },
        {
          basis: "Basis 2",
          unit_of_measurement: "Meter",
          unit: 20,
          rate: 3,
          amount: 60,
        },
      ],
    },
    {
      section_name: "Section 2",
      section_number: 2,
      section_currency: {
        currency: "NGN",
        exchange_rate: 100.45,
        is_base_currency: true,
        customer_currency: "USD",
      },
      section_data: [
        {
          basis: "Basis 3",
          unit_of_measurement: "Liter",
          unit: 30,
          rate: 2,
          amount: 60,
        },
      ],
    },
  ],
};
