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
    id: "warm-up",
    title: "Pre-Workout Warm-Up",
    description:
      "Tom guides you through essential warm-up movements to get your body ready and prevent injury.",
    duration: "5:30",
    videoSrc: "/videos/tom_brady_yoga.mp4",
    order: 1,
  },
  {
    id: "hamstring-stretch",
    title: "Hamstring Stretch Sequence",
    description:
      "Protect your legs with this comprehensive hamstring routine. Stay loose, stay healthy.",
    duration: "6:15",
    videoSrc: "/videos/hamstring-stretch.mp4",
    order: 2,
  },
  {
    id: "hip-flexor",
    title: "Hip Flexor & Core Activation",
    description:
      "Unlock your hips and activate your core. Essential for athletes at every level.",
    duration: "7:00",
    videoSrc: "/videos/hip-flexor.mp4",
    order: 3,
  },
  {
    id: "shoulder-mobility",
    title: "Shoulder Mobility & Stability",
    description:
      "Keep your shoulders healthy for the long haul. Prevention is the best game plan.",
    duration: "5:45",
    videoSrc: "/videos/shoulder-mobility.mp4",
    order: 4,
  },
  {
    id: "cool-down",
    title: "Post-Workout Cool-Down",
    description: "Wind down properly. Recovery is where champions are made.",
    duration: "4:30",
    videoSrc: "/videos/cool-down.mp4",
    order: 5,
  },
];
