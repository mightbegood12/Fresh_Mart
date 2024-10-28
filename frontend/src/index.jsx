import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Utils/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <CartProvider>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </CartProvider>
);
