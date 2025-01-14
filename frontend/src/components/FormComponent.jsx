import React, { useState } from "react";
import { toast } from "react-toastify";

const FormComponent = ({ setFormInfo }) => {
  const user = localStorage.getItem("user");
  const userName = user ? JSON.parse(user).name : "";
  const userEmail = user ? JSON.parse(user).email : "";
  const [formData, setFormData] = useState({
    firstName: userName,
    lastName: "",
    email: userEmail,
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormInfo(formData);
    toast.info("Delivery Information Submited. Now Place Order", {
      position: "top-center",
    });
  };

  return (
    <form className="flex flex-col gap-2 my-4 mx-6" onSubmit={handleSubmit}>
      <label className="grid grid-cols-2 gap-2">
        <input
          className="p-2 border"
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          className="p-2 border"
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <input
          className="p-2 w-full border"
          type="text"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <input
          className="p-2 w-full border"
          type="text"
          name="street"
          placeholder="Street"
          value={formData.street}
          onChange={handleChange}
          required
        />
      </label>
      <label className="grid grid-cols-2 gap-2">
        <input
          className="p-2 border"
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <input
          className="p-2 border"
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          // required
        />
      </label>
      <label className="grid grid-cols-2 gap-2">
        <input
          className="p-2 border"
          type="text"
          name="zipcode"
          placeholder="Zipcode"
          value={formData.zipcode}
          onChange={handleChange}
          // required
        />
        <input
          className="p-2 border"
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <input
          className="p-2 w-full border"
          type="text"
          name="phone"
          placeholder="Phone no"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>
      <div className="flex items-center justify-center">
        <button className=" bg-orange-600 rounded-lg hover:bg-red-600 w-max text-white px-4 py-2">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
