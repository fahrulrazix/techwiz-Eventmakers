import { NavbarBrand } from "@nextui-org/react";
import NavContentAsGuest from "./NavContentAsGuest";
import useNavbar from "../hooks/useNavbar";
import NavContentAsUser from "./NavContentAsUser";

export default function NavbarSection() {
  const { user } = useNavbar();

  return (
    <>
      <NavbarBrand className="text-3xl">
        <p className="font-bold text-inherit">EventMaker.</p>
      </NavbarBrand>
      {user == null ? <NavContentAsGuest /> : <NavContentAsUser />}
    </>
  );
}
