// Your ModeToggle component
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { HeartIcon, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Dropdown showArrow placement="bottom-end">
        <DropdownTrigger>
          <Button size="sm" isIconOnly variant="faded" aria-label="Like">
            <Sun
              className={`h-4 w-4 rotate-0 scale-100 transition-transform ${
                theme === "dark"
                  ? "dark:-rotate-90 dark:scale-0"
                  : "dark:rotate-0 dark:scale-100"
              }`}
            />
            <Moon
              className={`absolute h-4 w-4 rotate-90 scale-0 transition-transform ${
                theme === "dark"
                  ? "dark:rotate-0 dark:scale-100"
                  : "dark:-rotate-90 dark:scale-0"
              }`}
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem onClick={() => setTheme("light")}>Light</DropdownItem>
          <DropdownItem onClick={() => setTheme("dark")}>Dark</DropdownItem>
          <DropdownItem onClick={() => setTheme("system")}>System</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default ModeToggle;
