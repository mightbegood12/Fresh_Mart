import { useEffect, useState } from "react";
import signinPoster from "/assets/poster.jpg";
import { Link } from "react-router-dom";
import BackIcon from "/assets/back.svg";
import cacheImages from "../Utils/imageLoader";

export default function SignIn() {
  const [isSigned, setIsSigned] = useState("Sign Up");

  useEffect(() => {
    if (signinPoster) {
      cacheImages(signinPoster);
    }
  }, []);
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
      <form className="flex flex-auto flex-col pt-40 items-center gap-4 text-gray-600  ">
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
            className="w-[50%] min-w-[16rem] border border-gray-700 px-3 py-2 outline-none"
            required
          />
        )}

        <input
          type="email"
          placeholder="Email Id"
          className="w-[50%] min-w-[16rem] border border-gray-700 px-3 py-2 outline-none"
          required
        />
        <input
          type="password"
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
      </form>

      <img
        className="absolute md:relative opacity-15 md:opacity-100 w-full h-full top-0 -z-10 object-cover md:w-2/4 object-center"
        src={signinPoster}
        alt=""
      />
    </div>
  );
}
