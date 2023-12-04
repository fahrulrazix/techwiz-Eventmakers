"use client";
import {
  NavbarContent,
  NavbarItem,
  Button,
  Link,
  DropdownItem,
  Dropdown,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import useNavbar from "../hooks/useNavbar";
import { useLogout } from "@/components/auth/hooks/useLogout";
import { ChevronDown, LayoutDashboard, LogOut } from "lucide-react";

export default function NavContentAsUser() {
  const { user } = useNavbar();
  const { handleLogout, loading } = useLogout();

  return (
    <NavbarContent justify="end">
      {/* Make Event */}
      <NavbarItem>
        <Button color="primary" variant="flat">
          Make Event
        </Button>
      </NavbarItem>

      {/* DropDown Section */}
      <Dropdown>
        {/* Trigger Button */}
        <NavbarItem>
          <DropdownTrigger>
            <Button
              disableRipple
              className="p-0 bg-transparent data-[hover=true]:bg-transparent flex gap-1"
              radius="sm"
              variant="light"
            >
              Hi, {user.name}
              <ChevronDown size={18} />
            </Button>
          </DropdownTrigger>
        </NavbarItem>
        {/* Dropdon Menu */}
        <DropdownMenu
          className="text-center"
          itemClasses={{
            base: "gap-4",
          }}
        >
          <DropdownItem key="autoscaling">
            <Button
              className="w-full"
              variant="light"
              as={Link}
              href="/dashboard"
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Button>
          </DropdownItem>
          <DropdownItem key="usage_metrics">
            <Button
              color="primary"
              variant="flat"
              onClick={handleLogout}
              isDisabled={loading}
              className="w-full "
            >
              <LogOut size={18} />
              Log Out
            </Button>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  );
}
