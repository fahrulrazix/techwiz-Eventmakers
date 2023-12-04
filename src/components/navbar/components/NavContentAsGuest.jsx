import { NavbarContent, NavbarItem, Button, Link } from "@nextui-org/react";

export default function NavContentAsGuest() {
  return (
    <NavbarContent justify="end">
      {/* Login Button */}
      <NavbarItem className="hidden lg:flex">
        <Link href="/login">Login</Link>
      </NavbarItem>
      {/* Register Button */}
      <NavbarItem>
        <Button as={Link} color="primary" href="/register" variant="flat">
          Sign Up
        </Button>
      </NavbarItem>
    </NavbarContent>
  );
}
