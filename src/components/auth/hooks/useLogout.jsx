"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const useLogout = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    // Delete Cookies
    Cookies.set("token", "");
    // Delete All storage
    localStorage.removeItem("userData");

    // Checking Token
    let valToken = Cookies.get("token");

    if (!(typeof valToken === "string" && valToken.length === 0)) {
      setLoading(false);
      toast.error("Error logout!");
      return;
    }

    setLoading(false);
    toast.success("Logout succesfully, redirecting...");
    setTimeout(() => router.push("/"), 300);
    location.reload();
  }
  return { loading, handleLogout };
};
