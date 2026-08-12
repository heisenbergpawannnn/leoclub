import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "./index.css";
import App from "./App.jsx";
import { EMAILJS_PUBLIC_KEY } from "./data/email.js";

emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
