"use client";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { useLogin } from "../hooks/useLogin";

export default function Login() {

  const { handleChange, handleSubmitLogin, loading } = useLogin();
   const inputAttribute = [
    {
      "name" : "email",
      "type": "email",
      "label": "Email",
    },
    {
      "name" : "password",
      "type": "password",
      "label": "Password",
    }
  ]
  
  return (
    <main className="space-y-3">
      <h3>Welcome Back!</h3>
      
       {inputAttribute.map((att) => (
         <Input
             
              key={att.name} 
              name={att.name}
              variant="underlined"
              type={att.type}
              onChange={handleChange}
              label={att.label}
              placeholder={`Enter your ${att.name}`}
          />
      ))}
      <Button isDisabled={loading} onClick={handleSubmitLogin} radius="sm">
        Submit
      </Button>
      <div className="flex">
        <p className="mr-1">Don't have account?</p> <Link href="/register">Register</Link>
      </div>
      
    </main>
  );
}
