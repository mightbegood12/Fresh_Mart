import { useEffect, useState } from "react";
import UserLogo from "/assets/user-logo.png";

export default function Profile() {
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div className="flex items-center justify-center  bg-gray-50">
      <div className="bg-slate-100 shadow-md rounded-lg m-10 p-6 w-96">
        <div className="flex flex-col items-center">
          <img
            className="w-20 h-20 rounded-full object-cover mb-4"
            src={UserLogo}
            alt="user-logo"
          />
          <h2 className="text-2xl font-semibold text-center mb-4">Profile</h2>
          <div>
            <p className="text-base">
              <strong>Name:</strong> {user.name ? user.name : "Not Provided"}
            </p>
            <p className="text-base mt-1">
              <strong>Email:</strong> {user.email ? user.email : "Not Provided"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
