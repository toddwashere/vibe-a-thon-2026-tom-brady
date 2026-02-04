import { Suspense } from "react";
import { WorkoutHeader } from "@/components/workout/workout-header";
import { WorkoutPlaylist } from "@/components/workout/workout-playlist";

export const metadata = {
  title: "TB12 Stretch & Recover | Injury Prevention Workouts",
  description:
    "Tom Brady's stretching routines to help you prevent sports injuries. Stay in the game. Stretch like a champion.",
};

function WorkoutPlaylistFallback() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="mx-auto max-w-sm aspect-[9/16] w-full animate-pulse rounded-xl bg-kauai-sand/30" />
    </div>
  );
}

export default function WorkoutPage() {
  return (
    <div className="min-h-screen">
      <WorkoutHeader />
      <main>
        <Suspense fallback={<WorkoutPlaylistFallback />}>
          <WorkoutPlaylist />
        </Suspense>
      </main>
    </div>
  );
}
