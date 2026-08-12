"use client";

import { useState } from "react";
import MapZoom from "@/components/article/map/MapZoomTemplate";
import { zoom0Elements } from "@/components/article/map/MapZoom0";
import { zoom1Elements } from "@/components/article/map/MapZoom1";
import { zoomn1Elements } from "@/components/article/map/MapZoom-1";
import { zoomn2Elements } from "@/components/article/map/MapZoom-2";

type ZoomLevel = "level1" | "level0" | "level-1" | "level-2";

export default function ClimateMapPage() {
  const [zoomLevel, setZoomLevel] = useState<ZoomLevel>("level1");

  const handleGatewayNavigate = (target: string) => {
    setZoomLevel(target as ZoomLevel);
  };

  const currentElements =
    zoomLevel === "level1"
      ? zoom1Elements
      : zoomLevel === "level0"
        ? zoom0Elements
        : zoomLevel === "level-1"
          ? zoomn1Elements
          : zoomLevel === "level-2"
            ? zoomn2Elements
            : zoom0Elements;

  return (
    <MapZoom
      elements={currentElements}
      onGatewayNavigate={handleGatewayNavigate}
    />
  );
}
