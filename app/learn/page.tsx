"use client";

import { useState } from "react";
import MapZoom from "@/components/article/map/MapZoomTemplate";
import { zoom0Elements } from "@/components/article/map/MapZoom0";
// import { zoom1Elements } from "@/components/article/map/zoom1Elements"; // once built
// import { zoom1aElements } from "@/components/article/map/zoom1aElements"; // once built

// Placeholder zoom-level state. Swap "level1" / "level1a" etc. for whatever
// identifiers your zoom system actually uses once it's built — this just
// demonstrates how MapZoom plugs into navigation without owning it itself.
type ZoomLevel = "level0" | "level1" | "level1a";

export default function ClimateMapPage() {
  const [zoomLevel, setZoomLevel] = useState<ZoomLevel>("level0");

  const handleGatewayNavigate = (target: string) => {
    setZoomLevel(target as ZoomLevel);
  };

  // Swap in the right element set per zoom level. Once zoom1Elements /
  // zoom1aElements exist, this becomes a real switch instead of always
  // rendering zoom0Elements.
  const currentElements =
    zoomLevel === "level0" ? zoom0Elements : zoom0Elements; // TODO: branch to real data per level

  return (
    <MapZoom
      elements={currentElements}
      onGatewayNavigate={handleGatewayNavigate}
    />
  );
}
