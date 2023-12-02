"use client";
import { API_URL } from "@/config/apiUrl";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  // Handle Change Input
  function handleChange(e) {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }

  // Handle Submit Login
  async function handleSubmitLogin() {
    setLoading(true);
    const { email, password } = loginData;

    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    Cookies.set("token", data.token);
    localStorage.setItem("userData", JSON.stringify(data.data));

    if (data.message === "User not found") {
      setLoading(false);
      toast.error("Ups..username or password doesn't match");
      return;
    } else {
      setLoading(false);
      toast.success("Login success! Redirect you to dashboard...");
      router.push("/dashboard"); //redirent to dashboard
    }
  }
  return { loading, handleChange, handleSubmitLogin };
};
