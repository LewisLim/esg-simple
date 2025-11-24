"use client";

import { AppShell, Burger, Group, NavLink, ScrollArea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Footer from "@/components/layout/Footer";
import { ReactNode } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { type: "header", label: "Learn" },
  { label: "Start Here", href: "/learn" },
  { type: "header", label: "Tools" },
  { label: "Calculator", href: "/calculator" },
  { type: "header", label: "Info" },
  { label: "Data", href: "/data" },
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
        width: 240,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header className="bg-bg">
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
      <AppShell.Navbar className="bg-bg">
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Group>
        <AppShell.Section component={ScrollArea} grow p="sm">
          {navLinks.map((item, index) => {
            if (item.type === "header") {
              return (
                <div
                  key={index}
                  className="px-3 pt-5 pb-1 text-xs font-semibold text-black uppercase"
                >
                  {item.label}
                </div>
              );
            }
            return (
              <NavLink
                href={item.href}
                key={index}
                label={item.label}
                className="bg-nav"
                // leftSection={<IconHome2 size={16} stroke={1.5} />}
              />
            );
          })}
        </AppShell.Section>
        <AppShell.Section>
          <Footer />
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
