import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import PreviewContextProvider from "./context/previewModalContext.tsx";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store.tsx";
import { PersistGate } from "redux-persist/integration/react";
import QuoteToggleContextProvider from "./context/quoteToggleContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QuoteToggleContextProvider>
        <PreviewContextProvider>
          <App />
        </PreviewContextProvider>
      </QuoteToggleContextProvider>
    </PersistGate>
  </Provider>
);
