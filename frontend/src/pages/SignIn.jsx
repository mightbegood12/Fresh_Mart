import { useContext, useState } from "react";
import signinPoster from "/assets/poster.jpg";
import { Link,useNavigate } from "react-router-dom";
import BackIcon from "/assets/back.svg";
import {CartContext} from '../context/CartContext'
import axios from 'axios'
import { toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function SignIn() {
  const [isSigned, setIsSigned] = useState("Sign Up");
  const {token,setToken} = useContext(CartContext)
  const [name,setName] = useState('')
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const backendURL = import.meta.env.VITE_BACKEND_URL; 
  const onSubmitHandler = async(e) => {
    e.preventDefault()
    
try {
  if (isSigned === 'Sign Up')
    {
   const response = await axios.post(backendURL + '/api/user/register',{name,email,password})
   console.log(response);
   if(response.data.token){
     setToken(response.data.token)
     localStorage.setItem('token',response.data.token)
     toast.success("Account Created SuccessFully!",{position:"top-center"})
     navigate('/')
     
   }
   else{
    toast.error("Error Creating Account", {position: "top-center"})
   }
  
 }
else{
  const response = await  axios.post(backendURL + '/api/user/login',{email,password})
  console.log(response);

  if(response.data.token){
    setToken(response.data.token)
    toast.success("Login SuccessFully!",{position:"top-center"})
    localStorage.setItem('token',response.data.token)
    navigate('/')
  }
  else{
    toast.error("Invalid email or password", {
      position: "top-center",
    });
  }
}
}

 catch (error) {
    console.log(error);
    toast.error("Invalid email or password", {position:"top-center"})
    
}
  
  }


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
      className="flex flex-auto flex-col pt-40 items-center gap-4 text-gray-600  ">
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
        <button className="bg-black text-white font-light px-8 py-2 mt-4">{isSigned === 'Login'? 'Sign  In' : 'Sign Up'}</button>

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
