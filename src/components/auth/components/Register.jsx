"use client";
import { Button, Input } from "@nextui-org/react";
import { useRegister } from "../hooks/useRegister";

export default function Register() {
  const { handleChange, handleRegister, loading } = useRegister();
  return (
    <main className="space-y-3">
      <Input name="name" onChange={handleChange} type="text" />
      <Input name="email" onChange={handleChange} type="email" />
      <Input name="password" onChange={handleChange} type="password" />
      <Button onClick={handleRegister} isDisabled={loading}>
        Kirim
      </Button>
    </main>
  );
}
