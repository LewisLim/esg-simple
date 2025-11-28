"use client";

import {
  BowlFood,
  CowIcon,
  DropIcon,
  FactoryIcon,
  FishIcon,
  GlobeHemisphereWestIcon,
  SolarPanelIcon,
  TreeIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import {
  Anchor,
  Card,
  Group,
  SimpleGrid,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";

const mockdata = [
  { title: "Climate", icon: GlobeHemisphereWestIcon, color: "teal" },
  { title: "Trees", icon: TreeIcon, color: "green" },
  { title: "Sea", icon: FishIcon, color: "blue" },
  { title: "Society", icon: UsersThreeIcon, color: "indigo" },
  { title: "Businesses", icon: FactoryIcon, color: "orange" },
  { title: "Energy", icon: SolarPanelIcon, color: "cyan" },
  { title: "Food", icon: BowlFood, color: "pink" },
  { title: "Animals", icon: CowIcon, color: "red" },
];

export function PopularTopics() {
  const theme = useMantineTheme();

  const items = mockdata.map((item) => (
    <UnstyledButton key={item.title} className="menu-item">
      <item.icon color={theme.colors[item.color][6]} size={40} />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Card withBorder radius="md" className="menu-card col-span-1">
      <Group justify="space-between">
        <h1 className="menu-title">Popular Topics</h1>
        <Anchor size="xs" c="dimmed" style={{ lineHeight: 1 }}>
          More
        </Anchor>
      </Group>
      <SimpleGrid cols={2} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}
