"use client";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useLogin } from "../hooks/useLogin";

export default function Login() {
  
  const { handleChange, handleSubmitLogin, loading } = useLogin();
  
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
