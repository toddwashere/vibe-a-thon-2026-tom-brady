"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import type { WorkoutVideo } from "@/lib/workout-videos";
import { Play } from "lucide-react";

interface VideoCardProps {
  video: WorkoutVideo;
  isActive: boolean;
  onClick: () => void;
}

export function VideoCard({ video, isActive, onClick }: VideoCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full gap-3 rounded-lg p-3 text-left transition-all hover:bg-kauai-ocean/10",
        isActive && "bg-kauai-ocean/20 ring-1 ring-kauai-ocean/40",
      )}
    >
      <div className="relative flex h-16 w-28 shrink-0 overflow-hidden rounded-md bg-kauai-sand/30">
        {video.thumbnail ? (
          <Image
            src={video.thumbnail}
            alt=""
            width={112}
            height={64}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Play className="h-6 w-6 text-kauai-ocean" />
          </div>
        )}
        <span className="absolute bottom-1 right-1 rounded bg-black/70 px-1.5 py-0.5 text-xs font-medium text-white">
          {video.duration}
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <p
          className={cn(
            "line-clamp-2 text-sm font-medium",
            isActive ? "text-kauai-ocean" : "text-kauai-forest",
          )}
        >
          {video.title}
        </p>
        <p className="mt-0.5 line-clamp-1 text-xs text-kauai-sand-dark">
          {video.description}
        </p>
      </div>
    </button>
  );
}
