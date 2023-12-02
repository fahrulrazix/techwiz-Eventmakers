"use client";
import { Button, Input } from "@nextui-org/react";
import { useRegister } from "../hooks/useRegister";
import Link from "next/link";

export default function Register() {
  const { handleChange, handleRegister, loading } = useRegister();
  const inputAttribute = [
    {
      "name" : "name",
      "type": "text",
      "label": "Name",

    },
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
      <h3>Sing Up Now!</h3>
      <p className="text-sm pb-2">Become a member and enjoy exclusive features.</p>

      
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
      
       <Button onClick={handleRegister} isDisabled={loading} radius="sm" className="mt-2">
        Submit
        </Button>
      <div className="flex text-sm ">
        
        <p className="mr-1">Already have account?</p> <Link href="/login">Login</Link>
      </div>
      
    </main>
  );
}
