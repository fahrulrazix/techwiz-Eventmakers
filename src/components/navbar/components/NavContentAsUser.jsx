import {
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link,
} from "@nextui-org/react";
import useNavbar from "../hooks/useNavbar";
import { useLogout } from "@/components/auth/hooks/useLogout";

export default function NavContentAsUser() {
  const { user } = useNavbar();
  const { handleLogout, loading } = useLogout();

  return (
    <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
        <Link href="/">Hi, {user.name} </Link>
      </NavbarItem>
      <NavbarItem>
        <Button
          as={Link}
          color="primary"
          variant="flat"
          onClick={handleLogout}
          isDisabled={loading}
        >
          Log Out
        </Button>
      </NavbarItem>
    </NavbarContent>
  );
}
