"use client";

import { Card, Text, Button, Group, Badge } from "@mantine/core";
import { LearnCardData } from "@/lib/learnModules";
import Link from "next/link";
import Image from "next/image";

export function LearnCard({
  title,
  description,
  imageUrl,
  estimatedTime,
  difficulty,
  href,
}: LearnCardData) {
  const difficultyColor = {
    beginner: "green",
    intermediate: "blue",
    advanced: "orange",
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <div style={{ position: "relative", width: "100%", height: 160 }}>
          <Image
            src={imageUrl ?? "/images/placeholder.jpg"}
            fill
            style={{ objectFit: "cover" }}
            alt={title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500} lineClamp={2}>
          {title}
        </Text>
      </Group>

      <Group gap="xs" mb="xs">
        <Badge size="sm" variant="light" color={difficultyColor[difficulty]}>
          {difficulty}
        </Badge>
        <Badge size="sm" variant="light" color="gray">
          {estimatedTime}
        </Badge>
      </Group>

      <Text size="sm" c="dimmed" lineClamp={3} mb="md">
        {description}
      </Text>

      <Button
        component={Link}
        href={href}
        color="blue"
        fullWidth
        mt="auto"
        radius="md"
      >
        Start Learning
      </Button>
    </Card>
  );
}
