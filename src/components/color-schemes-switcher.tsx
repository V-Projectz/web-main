"use client";

import { useMantineColorScheme, Menu, ActionIcon } from "@mantine/core";
import { IconSun, IconMoon, IconBrightnessFilled } from "@tabler/icons-react";
import { useState } from "react";

// ========================================================================= //
export function ColorSchemeDropdown() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [, setOpened] = useState(false);

  // Pick icon and color based on current theme
  const icon = {
    light: <IconSun size={24} />,
    dark: <IconMoon size={24} />,
    auto: <IconBrightnessFilled size={24} />,
  }[colorScheme ?? "auto"];
  //
  return (
    <Menu shadow="md" width={160} onOpen={() => setOpened(true)} onClose={() => setOpened(false)}>
      <Menu.Target>
        <ActionIcon
          size="lg"
          aria-label="Switch theme"
          variant="filled"
          color={colorScheme === "light" ? "yellow" : colorScheme === "dark" ? "blue" : "gray"}
          radius="xl" // Rounded full
          style={{ transition: "background-color 200ms ease" }}
        >
          {icon}
        </ActionIcon>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item leftSection={<IconSun size={16} />} onClick={() => setColorScheme("light")}>Light</Menu.Item>
        <Menu.Item leftSection={<IconMoon size={16} />} onClick={() => setColorScheme("dark")}>Dark</Menu.Item>
        <Menu.Item leftSection={<IconBrightnessFilled size={16} />} onClick={() => setColorScheme("auto")}>Auto</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}