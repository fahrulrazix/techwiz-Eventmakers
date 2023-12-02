import {
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link,
} from "@nextui-org/react";

export default function NavContentAsGuest() {
  return (
    <NavbarContent justify="end">
      <NavbarItem className="hidden lg:flex">
        <Link href="/login">Login</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="primary" href="/register" variant="flat">
          Sign Up
        </Button>
      </NavbarItem>
    </NavbarContent>
  );
}
