import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminHome from "./pages/AdminHome";
export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <header className="sticky top-0 z-50 bg-white/95">
            <Navbar setToken={setToken} />
          </header>
          <div className="flex flex-row flex-shrink-0 w-full">
            <Sidebar />
            <Routes>
              <Route path="/" element={<AdminHome />} />
              <Route path="/add" element={<Add token={token} />} />
              <Route path="/list" element={<List token={token} />} />
              <Route path="/orders" element={<Orders token={token} />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
