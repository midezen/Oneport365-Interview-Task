import { createContext, useState } from "react";
import { quoteToggleContextType } from "../models";

const defaultValue: quoteToggleContextType = {
  addNewBasis: false,
  addNewSection: false,
  setAddNewBasis: () => {},
  setAddNewSection: () => {},
};

export const QuoteToggleContext =
  createContext<quoteToggleContextType>(defaultValue);

const QuoteToggleContextProvider = ({ children }: any) => {
  const [addNewSection, setAddNewSection] = useState<boolean>(false);
  const [addNewBasis, setAddNewBasis] = useState<boolean>(false);

  return (
    <QuoteToggleContext.Provider
      value={{ addNewBasis, setAddNewBasis, addNewSection, setAddNewSection }}
    >
      {children}
    </QuoteToggleContext.Provider>
  );
};

export default QuoteToggleContextProvider;
