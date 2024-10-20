import { useState } from "react";
import signinPoster from "/assets/poster.jpg";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [isSigned, setIsSigned] = useState("Sign Up");
  return (
    <div className="flex flex-row gap-0 h-screen ">
      <Link
        to="/"
        className="absolute z-20 h-[2rem] w-[2rem] px-2 text-lg left-4 top-4 text-white  bg-black bg-opacity-15 rounded-full"
      >
        &#8592;
      </Link>
      <form className="flex flex-auto flex-col pt-40 items-center gap-4 text-gray-600">
        <div className="inline-flex items-center gap-3 mb-2 mt-10 ">
          <p className="text-3xl">{isSigned}</p>
          <hr className="border-none h-[1.5px] w-7 bg-gray-600" />
        </div>
        {isSigned === "Login" ? (
          ""
        ) : (
          <input
            type="text"
            placeholder="Name"
            className="w-[50%] border border-gray-700 px-3 py-2 outline-none"
            required
          />
        )}

        <input
          type="email"
          placeholder="EmailId"
          className="w-[50%] border border-gray-700 px-3 py-2 outline-none"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-[50%] border border-gray-700 px-3 py-2 outline-none"
          required
        />

        <div className=" w-[50%] flex justify-between">
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
      </form>
      <img
        className=" object-cover w-2/4 object-center"
        src={signinPoster}
        alt=""
      />
    </div>
  );
}
