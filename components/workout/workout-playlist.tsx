"use client";

import { useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { VideoPlayer } from "./video-player";
import { PlaylistSidebar } from "./playlist-sidebar";
import { workoutVideos } from "@/lib/workout-videos";
import type { WorkoutVideo } from "@/lib/workout-videos";

export function WorkoutPlaylist() {
  const searchParams = useSearchParams();
  const videoParam = searchParams.get("v");

  const initialVideo =
    workoutVideos.find((v) => v.id === videoParam) ?? workoutVideos[0];

  const [activeVideo, setActiveVideo] = useState<WorkoutVideo>(initialVideo);

  const handleSelectVideo = useCallback((video: WorkoutVideo) => {
    setActiveVideo(video);
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
        <div className="flex-1 min-w-0">
          <VideoPlayer video={activeVideo} />
          <div className="mt-4">
            <h2 className="text-xl font-bold text-kauai-forest">
              {activeVideo.title}
            </h2>
            <p className="mt-2 text-kauai-sand-dark">
              {activeVideo.description}
            </p>
          </div>
        </div>
        <aside className="w-full shrink-0 lg:w-96">
          <div className="sticky top-4 rounded-xl border border-kauai-ocean/20 bg-white/60 p-4 shadow-lg backdrop-blur-sm">
            <PlaylistSidebar
              videos={workoutVideos}
              activeVideoId={activeVideo.id}
              onSelectVideo={handleSelectVideo}
            />
          </div>
        </aside>
      </div>
    </div>
  );
}
