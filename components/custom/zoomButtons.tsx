"use client";

import { Divider } from "@mantine/core";
import { PlusIcon, MinusIcon } from "@phosphor-icons/react";
import { Dispatch, SetStateAction } from "react";

export type ZoomLevel = 1 | 0 | -1 | -2;

interface Props {
  zoomLevel: number;
  setZoomLevel: Dispatch<SetStateAction<number>>;
}

export default function ZoomButtons({ zoomLevel, setZoomLevel }: Props) {
  return (
    <div className="w-10 h-16 flex-center flex-col border-1 border-slate-200 rounded-md bg-white">
      <div
        className="w-full h-7 flex-center cursor-pointer"
        onClick={() => (zoomLevel < 1 ? setZoomLevel(zoomLevel + 1) : "")}
      >
        <PlusIcon size={14} />
      </div>
      <Divider color="#AAAAAA" className="w-full" />
      <div
        className="w-full h-7 flex-center cursor-pointer"
        onClick={() => (zoomLevel > -2 ? setZoomLevel(zoomLevel - 1) : "")}
      >
        <MinusIcon size={14} />
      </div>
    </div>
  );
}
