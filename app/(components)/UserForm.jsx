"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
    // console.log(formData);
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
    <div className="flex flex-col items-center justify-center">
      <form
        method="post"
        onSubmit={handleSubmit}
        className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
      >
        <h1 className="text-3xl text-center mb-8 font-bold">Create New User</h1>
        <Label htmlFor="name">Full Name</Label>
        <Input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          required
          value={formData.name}
          className="input-field m-2 rounded"
        />
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          required
          value={formData.email}
          className="input-field m-2 rounded"
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          required
          value={formData.password}
          className="input-field m-2 rounded"
        />
        <Button type="submit" className="m-2  bg-blue-300 hover:bg-blue-100">
          Create User
        </Button>
      </form>
      <p className="text-red-500">{errorMessage}</p>
    </div>
  );
};

export default UserForm;
