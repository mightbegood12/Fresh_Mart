import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import ItemView from "./pages/ItemView";
function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <body className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item-view" element={<ItemView />} />
        </Routes>
      </body>
      <footer>
        <Footer></Footer>
      </footer>
    </BrowserRouter>
  );
}

export default App;
