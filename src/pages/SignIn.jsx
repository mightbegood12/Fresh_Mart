import { useState } from "react";

export default function SignIn() {
  const [isSigned,setIsSigned] = useState('Sign Up')
  return (
    <form className=" flex flex-col w-[90%] items-center sm:max-w-96 gap-4 mb-5 m-auto mt-8 text-gray-600">
      <div className="inline-flex items-center gap-3 mb-2 mt-10 ">
        <p className="text-3xl">{isSigned}</p>
        <hr className="border-none h-[1.5px] w-7 bg-gray-600" />
      </div>
      {isSigned === 'Login' ? '' : 
       <input type="text" placeholder="Name" 
       className="w-full border border-gray-700 px-3 py-2 outline-none" 
       required
       />
      }
     

      <input type="email" placeholder="EmailId" 
      className="w-full border border-gray-700 px-3 py-2 outline-none" 
      required
      />
        <input type="password" placeholder="Password" 
      className="w-full border border-gray-700 px-3 py-2 outline-none" 
      required
      />

      <div className=" w-full flex justify-between">
        <p className="cursor-pointer" >Forget Password?</p>
        {
        isSigned === 'Login' 
         ? <p className="cursor-pointer"  onClick={() => setIsSigned('Sign Up')}>Create account</p>
         : <p className="cursor-pointer" onClick={() => setIsSigned('Login')}>Login</p>
        }
      </div>
    </form>
  )
}
