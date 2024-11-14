import { useState } from "react";
import signinPoster from "/assets/poster.jpg";
import { Link, useNavigate } from "react-router-dom";
import BackIcon from "/assets/back.svg";
import { Flip, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { backendURL } from "../App";
import { useCart } from "../context/CartContext.jsx";

export default function SignIn({ setToken }) {
  const [isSigned, setIsSigned] = useState("Sign Up");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (isSigned === "Sign Up" && name !== "") {
        const response = await axios.post(backendURL + "/api/user/register", {
          name,
          email,
          password,
        });
  
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("user", JSON.stringify({ name, email }));
          toast.success("Account Created Successfully!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
          });
          setIsSigned("Login");
        } else {
          toast.error(response.data.message || "Registration failed", {
            position: "top-center",
          });
        }
      } else {
        const response = await axios.post(backendURL + "/api/user/login", {
          email,
          password,
        });
  
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("user", JSON.stringify({ email }));
          toast.success("Login Successfully!", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
          });
          navigate("/");
        } else {
          toast.error(response.data.message || "Login failed", {
            position: "top-center",
          });
        }
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || error.message, {
          position: "top-center",
        });
      } else if (error.request) {
        toast.error("No response from server", { position: "top-center" });
      } else {
        toast.error(error.message, { position: "top-center" });
      }
    }
  };
  

  return (
    <div className="block md:flex flex-row gap-0 h-screen ">
      <Link
        to="/"
        className="absolute z-20 bg-orange-300 md:bg-transparent left-4 top-4 bg-opacity-15 rounded-full"
      >
        <img
          className=" h-[2rem] w-[2rem] px-2 text-lg  "
          src={BackIcon}
          alt="back"
        />
      </Link>
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-auto flex-col pt-40 items-center gap-4 text-gray-600  "
      >
        <div className="inline-flex items-center gap-3 mb-2 mt-10 ">
          <p className="text-3xl">{isSigned}</p>
          <hr className="border-none h-[1.5px] w-7 bg-gray-600" />
        </div>
        {isSigned === "Login" ? (
          ""
        ) : (
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Name"
            className="w-[50%] min-w-[16rem] border border-gray-700 px-3 py-2 outline-none"
            required
          />
        )}

        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email Id"
          className="w-[50%] min-w-[16rem] border border-gray-700 px-3 py-2 outline-none"
          required
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          className="w-[50%] min-w-[16rem] border border-gray-700 px-3 py-2 outline-none"
          required
        />

        <div className="w-[50%] min-w-[16rem] flex justify-between">
          <p className="cursor-pointer">Forget Password?</p>
          {isSigned === "Login" ? (
            <p
              className="cursor-pointer"
              onClick={() => setIsSigned("Sign Up")}
            >
              Create account
            </p>
          ) : (
            <p className="cursor-pointer" onClick={() => setIsSigned("Login")}>
              Login
            </p>
          )}
        </div>
        <button className="bg-black text-white font-light px-8 py-2 mt-4">
          {isSigned === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>

      <img
        className="absolute md:relative opacity-15 md:opacity-100 w-full h-full top-0 -z-10 object-cover md:w-2/4 object-center"
        src={signinPoster}
        alt=""
        loading="lazy"
      />
    </div>
  );
}
