"use client";

import { Modal, Button, Stack } from "@mantine/core";
import type { GatewayModalContent } from "@/types/interface/topic-interface";

interface GatewayModalShellProps {
  content: GatewayModalContent | null;
  opened: boolean;
  onClose: () => void;
  /** Called when a link is clicked, passing the target so the parent map
   *  can change zoom level / navigate. Shell doesn't own navigation state. */
  onNavigate: (target: number) => void;
}

/**
 * Renders gateway-style nodes — Earth, Waste, or any node that doesn't have
 * its own in/out/climate story, but exists to link deeper into the map.
 * Deliberately NOT the same component as TopicModalShell: different content
 * shape (intro + links, no sections), different purpose (navigation, not
 * explanation). See conversation notes on why Earth failed the standard
 * 5-part template.
 */
export default function GatewayModalShell({
  content,
  opened,
  onClose,
  onNavigate,
}: GatewayModalShellProps) {
  if (!content) return null;

  const { topicName, intro, links } = content;

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={
        <span className="text-lg font-medium text-foreground">{topicName}</span>
      }
      centered
      size="md"
      radius="md"
      overlayProps={{ backgroundOpacity: 0.5, blur: 2 }}
    >
      <Stack gap="md" pb="xs">
        <p className="text-base text-foreground leading-relaxed">{intro}</p>

        <Stack gap="xs">
          {links.map((link) => (
            <Button
              key={link.target}
              variant="light"
              color="teal"
              fullWidth
              onClick={() => {
                onNavigate(Number(link.target));
                onClose();
              }}
            >
              {link.label}
            </Button>
          ))}
        </Stack>
      </Stack>
    </Modal>
  );
}
