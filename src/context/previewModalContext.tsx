import { createContext, useState } from "react";
import { PreviewContextType } from "../models";

const defaultValue: PreviewContextType = {
  setPreviewOpen: () => {},
  handlePreviewOpen: () => {},
  handlePreviewClose: () => {},
  previewOpen: false,
};

export const PreviewContext = createContext<PreviewContextType>(defaultValue);

const PreviewContextProvider = ({ children }: any) => {
  const [previewOpen, setPreviewOpen] = useState<boolean>(false);
  const handlePreviewOpen = () => setPreviewOpen(true);
  const handlePreviewClose = () => setPreviewOpen(false);

  return (
    <PreviewContext.Provider
      value={{
        previewOpen,
        setPreviewOpen,
        handlePreviewClose,
        handlePreviewOpen,
      }}
    >
      {children}
    </PreviewContext.Provider>
  );
};

export default PreviewContextProvider;
