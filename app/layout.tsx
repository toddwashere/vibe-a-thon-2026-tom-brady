import type { Metadata } from "next";
import "./globals.css";
import { AuthSessionProvider } from "@/components/providers/session-provider";

export const metadata: Metadata = {
  title: "GOAT Yoga TM, with Tom and Michelle",
  description:
    "GOAT Yoga with Tom and Michelle. Stay in the game. Stretch like a champion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-transparent">
        <div
          className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hawaii-bg.jpg')" }}
          aria-hidden
        />
        <div
          className="fixed inset-0 -z-10 bg-white/30 backdrop-blur-[1px]"
          aria-hidden
        />
        <AuthSessionProvider>{children}</AuthSessionProvider>
      </body>
    </html>
  );
}
