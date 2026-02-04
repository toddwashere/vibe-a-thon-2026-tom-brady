export interface WorkoutVideo {
  id: string;
  title: string;
  description: string;
  duration: string;
  thumbnail?: string;
  videoSrc: string;
  order: number;
}

export const workoutVideos: WorkoutVideo[] = [
  {
    id: "new-workout",
    title: "New Workout",
    description: "A new stretch and recovery routine to keep your body ready.",
    duration: "5:00",
    videoSrc: "/videos/grok-video-45c4de2f-0c1c-4b6e-a7f0-ab089a584175.mp4",
    order: 1,
  },
  {
    id: "tripod",
    title: "Tripod Pose",
    description:
      "Build balance and core strength. Essential for athletes at every level.",
    duration: "5:30",
    videoSrc: "/videos/tom_brady_tripod.mp4",
    order: 2,
  },
  {
    id: "warm-up",
    title: "Pre-Workout Warm-Up",
    description:
      "Tom guides you through essential warm-up movements to get your body ready and prevent injury.",
    duration: "5:30",
    videoSrc: "/videos/tom_brady_yoga.mp4",
    order: 3,
  },
  {
    id: "frog",
    title: "Frog Pose",
    description:
      "Open your hips and build flexibility with this foundational stretch. Stay loose, stay healthy.",
    duration: "5:00",
    videoSrc: "/videos/tom_brady_frog.mp4",
    order: 4,
  },
  {
    id: "warrior-1",
    title: "Warrior Pose I",
    description:
      "Strengthen your legs and open your hips. Prevention is the best game plan.",
    duration: "6:00",
    videoSrc: "/videos/tom_brady_warrior_1.mp4",
    order: 5,
  },
  {
    id: "stretch-sequence",
    title: "Stretch Sequence",
    description:
      "Tom guides you through a flowing stretch routine to keep your body ready.",
    duration: "5:45",
    videoSrc: "/videos/20260203_2030_01kgkb33cee53tk0ymra3eeq4f.mp4",
    order: 6,
  },
  {
    id: "cool-down",
    title: "Post-Workout Cool-Down",
    description: "Wind down properly. Recovery is where champions are made.",
    duration: "4:30",
    videoSrc: "/videos/grok-video-d2e2d654-1a6e-47ad-b0fa-5cbb3de399b1.mp4",
    order: 7,
  },
];
