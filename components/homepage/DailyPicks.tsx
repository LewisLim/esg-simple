"use client";

import { DropIcon } from "@phosphor-icons/react";
import {
  Card,
  Group,
  SimpleGrid,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";

const mockdata = [
  { title: "Credit Cards", icon: DropIcon, color: "violet" },
  { title: "Banks nearby", icon: DropIcon, color: "indigo" },
  { title: "Transfers", icon: DropIcon, color: "blue" },
  { title: "Refunds", icon: DropIcon, color: "green" },
];

export function DailyPicks() {
  const theme = useMantineTheme();

  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className="menu-item-card">
      <div className="flex items-start w-full">
        <div className="w-40 flex-center flex-col me-2 p-1">
          <item.icon color={theme.colors[item.color][6]} size={32} />
          <Text size="xs" mt={7} className="text-center">
            {item.title}
          </Text>
        </div>
        <p className="text-sm p-1 line-clamp-3">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
          Ipsum Lorem Ipsum...
        </p>
      </div>
    </UnstyledButton>
  ));

  return (
    <Card withBorder radius="md" className="menu-card col-span-2">
      <Group >
        <h1 className="menu-title text-center">Daily Picks for you</h1>
        {/* <Anchor size="xs" c="dimmed" style={{ lineHeight: 1 }}>
          More
        </Anchor> */}
      </Group>
      <SimpleGrid cols={1} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}
