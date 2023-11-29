"use client";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { API_URL } from "@/config/apiUrl";
import { useState } from "react";

export default function Login() {
  // const { handleChange, handleLogin, loading } = useRegister();
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password:""
  })
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
    if (!data) {
      setLoading(false);
      console.log("error");
      return
    }
    setLoading(false);
    console.log(data);
    
  }
  return (
    <main className="space-y-3">
      <h3>Welcome Back!</h3>
      <label>Email</label>
      <Input name="email" type="email" onChange={handleChange}/>
      <label>Password</label>
      <Input name="password"  type="password" onChange={handleChange}/>
      <Button onClick={handleSubmitLogin}>
        Submit
      </Button>
      <p>Don't have account?</p> <Link href="/register">Register</Link>
    </main>
  );
}
