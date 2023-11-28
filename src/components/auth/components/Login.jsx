"use client";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

export default function Login() {
 // const { handleChange, handleLogin, loading } = useRegister();
  return (
    <main className="space-y-3">
      <h3>Welcome Back!</h3>
      <label>Email</label>
      <Input name="email" type="email" />
      <label>Password</label>
      <Input name="password"  type="password" />
      <Button>
        Submit
      </Button>
      <p>Don't have account?</p> <Link href="/register">Register</Link>
    </main>
  );
}
