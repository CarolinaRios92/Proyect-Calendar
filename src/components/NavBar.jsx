import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  DropdownMenu,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownItem,
} from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react";
import SearchIcon from "./icons/SearchIcon";
import { useState } from "react";
import CreateIcon from "./icons/CreateIcon";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();
  console.log(session);

  const menuItems = ["Dia", "Semana", "Mes"];

  return (
    <Navbar class="bg-primary" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Septiembre</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          {session && (
            <div class="flex gap-3 items-center">
              <Link href="/event/new">
                <button class="border border-gray-400 rounded-full w-8 h-8">
                  <CreateIcon classname={"w-4 m-auto"} />
                </button>
              </Link>

              <button class="border border-gray-400 rounded-full w-8 h-8">
                <SearchIcon classname={"w-4 m-auto"} />
              </button>

              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    src={session.user.image}
                  />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownItem key="profile" className="h-14 gap-2">
                    <p class="text-sm">Ingresaste con</p>
                    <p class="text-sm">{session.user.email}</p>
                  </DropdownItem>
                  <DropdownItem onClick={signOut}>
                    <p class="text-sm text-red-600">Log Out</p>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          )}
          {!session && (
            <Button onClick={signIn} color="primary" variant="flat">
              Sign Up
            </Button>
          )}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" href="#" size="lg">
              <p class="text-black">{item}</p>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
