import { createContext, useState } from "react";
import { PreviewContextType } from "../models";

export const PreviewContext = createContext<PreviewContextType>();

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
