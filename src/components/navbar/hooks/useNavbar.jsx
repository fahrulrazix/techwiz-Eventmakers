"use client";

import { useEffect, useState } from "react";

export default function useNavbar() {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Ambil nama
    const userData = JSON.parse(localStorage.getItem("userData"));
    console.log(userData);
    setUser(userData);
  }, []);
  return { user };
}
