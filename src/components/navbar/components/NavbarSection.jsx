"use client";
import { Button, Link, NavbarBrand } from "@nextui-org/react";
import NavContentAsGuest from "./NavContentAsGuest";
import useNavbar from "../hooks/useNavbar";
import NavContentAsUser from "./NavContentAsUser";

export default function NavbarSection() {
  const { user } = useNavbar();

  return (
    <>
      <NavbarBrand className="text-3xl">
        <Link className="font-bold text-inherit" href="/">
          EventMaker.
        </Link>
      </NavbarBrand>
      {/* isUser or not ? */}
      {user == null ? <NavContentAsGuest /> : <NavContentAsUser />}
    </>
  );
}
