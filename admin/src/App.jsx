import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95">
        <Navbar />
      </header>
      <div className="flex flex-row">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
