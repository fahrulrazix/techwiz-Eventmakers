"use client";
import { API_URL } from "@/config/apiUrl";
import { useState } from "react";
import toast from "react-hot-toast";

export const useRegister = () => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  // Change Function Handle
  function handleChange(e) {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  }

  // Handle Button Function
  async function handleRegister() {
    const { name, email, password } = registerData;
    const res = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await res.json();
    console.log(data);

    if (!data) {
      setLoading(true);
      toast.error("something when wrong!, name or email already registered");
      return;
    }
    setLoading(false);
    toast.success("user registered, please login!");
  }

  return { handleChange, handleRegister, loading };
};
