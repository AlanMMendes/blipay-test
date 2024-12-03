import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/Navbar/index.tsx";
import "./index.css";
import FormPage from "./pages/form.tsx";
import MainPage from "./pages/main.tsx";
import { store } from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/credit-score/:type" element={<FormPage />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
