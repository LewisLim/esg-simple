"use client";

import { useState } from "react";
import MapZoomTemplate from "@/components/article/map/MapZoomTemplate";
import { zoom0Elements } from "@/components/article/map/MapZoom0";
import { zoom1Elements } from "@/components/article/map/MapZoom1";
import { zoomn1Elements } from "@/components/article/map/MapZoom-1";
import { zoomn2Elements } from "@/components/article/map/MapZoom-2";

export default function ClimateMapPage() {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const handleGatewayNavigate = (target: number) => {
    setZoomLevel(target);
  };

  const currentElements =
    zoomLevel === 1
      ? zoom1Elements
      : zoomLevel === 0
        ? zoom0Elements
        : zoomLevel === -1
          ? zoomn1Elements
          : zoomLevel === -2
            ? zoomn2Elements
            : zoom0Elements;

  return (
    <MapZoomTemplate
      elements={currentElements}
      onGatewayNavigate={handleGatewayNavigate}
      // bgColor="bg-gradient-to-b from-slate-950 to-slate-900"
      bgImage="map/space.jpg"
      zoomLevel={zoomLevel}
      setZoomLevel={setZoomLevel}
    />
  );
}
