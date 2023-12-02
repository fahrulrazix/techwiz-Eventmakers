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
      <h3>Login Now!</h3>
      <p className="text-sm pb-2">If you are already a member <br/>you can login with your email address and password.</p>
      
       {inputAttribute.map((att) => (
         <Input
           classNames={{
             label: "text-white-main dark:text-white-main",
             input: [
               "bg-transparent",
               "text-white-main dark:text-white-main",
               "placeholder:text-white-main",
             ],
             
           }}

              key={att.name} 
              name={att.name}
              variant="underlined"
              type={att.type}
              onChange={handleChange}
              label={att.label}
              placeholder={`Enter your ${att.name}`
               
           }
          />
      ))}
      <Button isDisabled={loading} onClick={handleSubmitLogin} radius="sm" className="mt-3">
        Submit
      </Button>
      <div className="flex text-sm ">
        <p className="mr-1">Don't have account?</p> <Link href="/register">Register</Link>
      </div>
      
    </main>
  );
}
