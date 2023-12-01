"use client";
import { Button, Input } from "@nextui-org/react";
import { useRegister } from "../hooks/useRegister";
import Link from "next/link";

export default function Register() {
  const { handleChange, handleRegister, loading } = useRegister();
  return (
    <main className="space-y-3">

      <h2>Create Account Now!</h2>
      <label>Name</label>
      <Input name="name" onChange={handleChange} type="text" />
      <label>Email</label>
      <Input name="email" onChange={handleChange} type="email" />
      <label>Password</label>
      <Input name="password" onChange={handleChange} type="password" />
      <Button onClick={handleRegister} isDisabled={loading}>
        Submit
      </Button>
      <p>Already have account?</p> <Link href="/login">Login</Link>
    </main>
  );
}
