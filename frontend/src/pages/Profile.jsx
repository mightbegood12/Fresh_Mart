import { useEffect, useState } from "react";
import UserLogo from "/assets/user-logo.png";
import axios from "axios";
import { backendURL } from "../App";
import ScaleLoader from "react-spinners/ScaleLoader";

export default function Profile() {
  const [user, setUser] = useState({ name: "", email: "", _id: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoading(true);
      axios
        .get(backendURL + "/api/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          const { name, email, _id } = response.data.user;
          setUser({ name, email, _id });
          localStorage.setItem("user", JSON.stringify({ name, email, _id }));
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

  return (
    <div className="h-screen">
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="bg-slate-100 h-[50vh] flex items-center justify-center shadow-md rounded-lg m-10 p-6 w-96">
          <div className="flex flex-col items-center">
            <img
              className="w-20 h-20 rounded-full object-cover "
              src={UserLogo}
              alt="user-logo"
            />
            <h2 className="text-2xl font-semibold text-center mb-4">Profile</h2>

            {loading ? (
              <div className="w-96 h-[100px] flex items-center justify-center">
                <ScaleLoader />
              </div>
            ) : (
              <div>
                <p className="text-base flex gap-3 ml-3">
                  <strong>Name:</strong>
                  {user.name}
                </p>
                <p className="text-base flex gap-3 ml-3">
                  <strong>Email:</strong> {user.email}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
