"use client";

import { AppShell, Burger, Group, NavLink, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Footer from "@/components/layout/Footer";
import { ReactNode } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/learn" },
  { label: "Calculator", href: "/calculator" },
  { label: "About", href: "/about" },
];

interface LayoutWrapperProps {
  children: ReactNode;
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <AppShell
      layout="alt"
      header={{ height: 50 }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          {/* <Header /> */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <div className="w-7 h-7 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="ml-2 text-xl font-semibold">CarbonCalc</span>
            </a>
          </div>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
        <AppShell.Section
          className="bg-primary"
          component={ScrollArea}
          grow
          p="sm"
        >
          {navLinks.map((link, index) => (
            <NavLink href={link?.href} key={index} label={link?.label} />
          ))}
        </AppShell.Section>
        <AppShell.Section>
          <Footer />
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
