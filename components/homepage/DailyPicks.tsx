"use client";

import { doYouKnowFacts } from "@/lib/do-you-know/facts";
import {
  Card,
  Group,
  SimpleGrid,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";

export function DailyPicks() {
  const theme = useMantineTheme();

  const items = doYouKnowFacts.slice(0, 4).map((item) => (
    <UnstyledButton key={item.title} className="menu-item-card">
      <div className="flex items-start w-full">
        <div className="w-[50px] flex-center flex-col me-2 p-1">
          <item.icon
            color={theme.colors[item.color]?.[6] ?? theme.colors.gray[6]}
            size={32}
          />
        </div>
        <div>
          <p className="text-start font-medium px-1 text-sm">{item.title}</p>
          <p className="text-sm p-1 line-clamp-4">{item.desc}</p>
        </div>
      </div>
    </UnstyledButton>
  ));

  return (
    <Card withBorder radius="md" className="menu-card col-span-2">
      <Group>
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
