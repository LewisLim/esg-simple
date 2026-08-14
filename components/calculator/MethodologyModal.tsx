import {
  Modal,
  Title,
  Text,
  Anchor,
  Divider,
  Stack,
  List,
} from "@mantine/core";

interface Props {
  opened: boolean;
  onClose: () => void;
}

export default function MethodologyModal({ opened, onClose }: Props) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Calculation Sources & Methodology"
      size="lg"
      centered
    >
      <Stack gap="md">
        <Text size="sm" c="dimmed">
          This calculator estimates your annual carbon footprint using published
          datasets and research, combined with reasonable assumptions where
          direct data isn&apos;t available (e.g. converting a survey answer like
          &quot;drive occasionally&quot; into an assumed distance per year).
          Every category below lists its data source and, where relevant, the
          assumptions layered on top.
        </Text>

        <Divider />

        <div>
          <Title order={5} mb={4}>
            Country Benchmark (CO₂ per capita)
          </Title>
          <Text size="sm">
            Global Carbon Budget (2025); Population based on various sources
            (2024) — via Our World in Data.
          </Text>
          <Text size="sm" c="dimmed">
            Territorial emissions (production-based), covering fossil fuel and
            industrial CO₂. Includes national industrial and infrastructure
            activity, not just personal consumption — used here as a benchmark
            for comparison, not a like-for-like personal figure.
          </Text>
          <Anchor
            href="https://ourworldindata.org/co2-and-greenhouse-gas-emissions"
            target="_blank"
            size="sm"
          >
            ourworldindata.org/co2-and-greenhouse-gas-emissions
          </Anchor>
        </div>

        <Divider />

        <div>
          <Title order={5} mb={4}>
            Diet & Food
          </Title>
          <Text size="sm">
            Poore, J. &amp; Nemecek, T. (2018), <em>Science</em> — via Our World
            in Data.
          </Text>
          <Text size="sm" c="dimmed">
            Full lifecycle emissions per kg of food product (land use change,
            farm, processing, transport, retail). Survey answers (e.g.
            &quot;meat most days&quot;) are converted into an assumed daily food
            basket, calibrated against real-world national average meat
            consumption so results stay realistic.
          </Text>
          <Anchor
            href="https://ourworldindata.org/environmental-impacts-of-food"
            target="_blank"
            size="sm"
          >
            ourworldindata.org/environmental-impacts-of-food
          </Anchor>
        </div>

        <Divider />

        <div>
          <Title order={5} mb={4}>
            Home Energy — Grid Intensity & Electricity Demand
          </Title>
          <Text size="sm">Ember (2026) — via Our World in Data.</Text>
          <Text size="sm" c="dimmed">
            Grid carbon intensity is measured on a lifecycle basis (includes
            manufacturing/supply chain, not just power-plant emissions).
            Electricity demand per capita includes commercial and industrial
            use, not just households — an estimated residential share is
            applied, calibrated against Singapore government household
            electricity data, to avoid overstating home energy use.
          </Text>
          <Stack gap={2}>
            <Anchor
              href="https://ourworldindata.org/grapher/carbon-intensity-electricity"
              target="_blank"
              size="sm"
            >
              ourworldindata.org/grapher/carbon-intensity-electricity
            </Anchor>
            <Anchor
              href="https://ourworldindata.org/grapher/per-capita-electricity-demand"
              target="_blank"
              size="sm"
            >
              ourworldindata.org/grapher/per-capita-electricity-demand
            </Anchor>
          </Stack>
        </div>

        <Divider />

        <div>
          <Title order={5} mb={4}>
            Transport & Holiday Travel
          </Title>
          <Text size="sm" c="dimmed">
            Mode-based emission factors (walking/cycling, public transport, car)
            reference standard published figures (UK DEFRA / EPA-style kg CO₂e
            per km). Flight emissions use UK DEFRA&apos;s 2025/2026 published
            factors, which include radiative forcing (aviation&apos;s additional
            warming effect beyond CO₂ alone, via contrails and high-altitude
            emissions). Survey answers are converted to an assumed annual
            distance or flight-hours per category, since the survey collects
            frequency, not exact distance.
          </Text>
        </div>

        <Divider />

        <div>
          <Title order={5} mb={4}>
            Shopping & Consumption
          </Title>
          <Text size="sm" c="dimmed">
            Based on general research on income and carbon footprint, which
            finds carbon intensity per dollar spent decreases as spend increases
            (higher spend increasingly goes to services and savings, not just
            more physical goods). This category has no single authoritative
            per-bucket dataset — figures here are reasoned estimates, not
            directly sourced.
          </Text>
        </div>

        <Divider />

        <div>
          <Title order={5} mb={4}>
            Household Size Adjustment
          </Title>
          <Text size="sm" c="dimmed">
            Uses the OECD-modified equivalence scale, a standard convention in
            household economics for splitting shared costs (like home energy)
            across household members: first adult = 1.0, each additional adult =
            0.5, each child = 0.3. Pet weighting (0.1) is not part of the OECD
            standard — it&apos;s a small approximation for pets&apos; marginal
            water/electricity draw.
          </Text>
        </div>

        <Divider />

        <Text size="xs" c="dimmed">
          All Our World in Data sources are licensed under{" "}
          <Anchor
            href="https://creativecommons.org/licenses/by/4.0/"
            target="_blank"
            size="xs"
          >
            CC BY 4.0
          </Anchor>
          . This calculator provides an estimate for informational purposes and
          shouldn&apos;t be treated as a precise personal carbon audit.
        </Text>
      </Stack>
    </Modal>
  );
}
