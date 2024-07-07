import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import store from "./redux/store.tsx";
import { Provider } from "react-redux";
import PreviewContextProvider from "./context/previewModalContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PreviewContextProvider>
      <App />
    </PreviewContextProvider>
  </Provider>
);
