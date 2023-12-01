"use client"
import { API_URL } from "@/config/apiUrl";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";//import cookie

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password:""
  })
  const router = useRouter();
  function handleChange(e){
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
    
  }
  async function handleSubmitLogin() {
    setLoading(true);
    const { email, password } = loginData;
    const res = await fetch(`${API_URL}/api/auth/login`,{
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({email, password})
    })
    const data = await res.json();
    Cookies.set("token", data.token);//set token from data 
    if (!data) {
      setLoading(false);
      toast.error("Ups..Error Login");
      return
    }
    setLoading(false);
    toast.success("Login success! Redirect you to dashboard...");
    setTimeout(() => router.push("/dashboard"), 2000);//redirent to dashboard
    
  }
  return { loading, handleChange, handleSubmitLogin };
}

