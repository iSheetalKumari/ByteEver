import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Problems from "./pages/Problems";
import Editor from "./pages/Editor";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="problems" element={<Problems />} />
          <Route path="editor/:id" element={<Editor />} /> {/* ✅ Dynamic Route */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
