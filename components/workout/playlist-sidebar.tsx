"use client";

import { VideoCard } from "./video-card";
import type { WorkoutVideo } from "@/lib/workout-videos";

interface PlaylistSidebarProps {
  videos: WorkoutVideo[];
  activeVideoId: string;
  onSelectVideo: (video: WorkoutVideo) => void;
}

export function PlaylistSidebar({
  videos,
  activeVideoId,
  onSelectVideo,
}: PlaylistSidebarProps) {
  const sortedVideos = [...videos].sort((a, b) => a.order - b.order);

  return (
    <div className="flex flex-col">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-kauai-sand-dark">
        Stretching Playlist
      </h3>
      <div className="flex flex-col gap-1">
        {sortedVideos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            isActive={video.id === activeVideoId}
            onClick={() => onSelectVideo(video)}
          />
        ))}
      </div>
    </div>
  );
}
