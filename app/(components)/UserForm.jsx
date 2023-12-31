"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    console.log(formData);
    event.preventDefault();
    setErrorMessage("");
    const response = await fetch("/api/Users", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });
    if (!response.ok) {
      const res = await response.json();
      setErrorMessage(res.message);
    } else {
      router.refresh();
      router.push("/");
    }
  };
  return (
    <>
      <form
        method="post"
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-1/2 "
      >
        <h1>Create New User</h1>
        <label>Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          required
          value={formData.name}
          className="m-2 bg-slate-400 rounded"
        />
        <label>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          required
          value={formData.email}
          className="m-2 bg-slate-400 rounded"
        />
        <label>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          required
          value={formData.password}
          className="m-2 bg-slate-400 rounded"
        />
        <button
          type="submit"
          className="bg-blue-300 hover:bg-blue-100"
        >
          Create User
        </button>
      </form>
      <p className="text-red-500">{errorMessage}</p>
    </>
  );
};

export default UserForm;
