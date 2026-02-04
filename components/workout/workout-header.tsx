import Link from "next/link";

export function WorkoutHeader() {
  return (
    <header className="border-b border-kauai-ocean/20 bg-kauai-sand/30 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 font-display">
          <span className="text-2xl font-bold tracking-tight text-kauai-ocean">
            TB12
          </span>
          <span className="hidden text-kauai-forest sm:inline">
            Stretch & Recover
          </span>
        </Link>
        <p className="hidden text-sm italic text-kauai-sand-dark sm:block">
          Stay in the game. Stretch like a champion.
        </p>
      </div>
    </header>
  );
}
