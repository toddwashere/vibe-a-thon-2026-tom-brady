"use client";

import { useEffect, useRef } from "react";
import type { WorkoutVideo } from "@/lib/workout-videos";

interface VideoPlayerProps {
  video: WorkoutVideo;
}

export function VideoPlayer({ video }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    if (el) {
      el.load();
    }
  }, [video.id]);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-kauai-sand/20 shadow-lg">
      <video
        ref={videoRef}
        key={video.id}
        className="h-full w-full object-cover"
        controls
        preload="metadata"
        poster={video.thumbnail}
        playsInline
      >
        <source src={video.videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
