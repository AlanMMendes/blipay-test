import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import Navbar from "./components/Navbar/index.tsx";
import "./index.css";
import FormPage from "./pages/form.tsx";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <div className="flex flex-col">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="credit-score/:type" element={<FormPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </StrictMode>
  </Provider>
);
