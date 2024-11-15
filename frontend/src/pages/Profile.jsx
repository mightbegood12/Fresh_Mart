import { useEffect, useState } from "react";
import UserLogo from "/assets/user-logo.png";
import axios from "axios";
import { backendURL } from "../App";

export default function Profile() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get(backendURL + "/api/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const { name, email } = response.data.user;
          setUser({ name, email });
          localStorage.setItem("user", JSON.stringify({ name, email }));
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) {
        setUser(storedUser);
      }
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
<<<<<<< HEAD
    <div className="flex items-center justify-center bg-gray-50">
=======
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-50">
>>>>>>> 1e913a84aba406fde2c7d5a4da69c75d95c147d1
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
              <strong>Name:</strong> {user.name}
            </p>
            <p className="text-base mt-1">
              <strong>Email:</strong> {user.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
