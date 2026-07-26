import type { Metadata } from "next";
import "./globals.css";
import { Field } from "@/app/components/Field";
import { Nav } from "@/app/components/Nav";

export const metadata: Metadata = {
  title: "Potato Projects",
  description:
    "A workshop of small, honest apps I make on the side: Days, Kinship, Marquee, Lift, Storied, FlightSight, Kept, Squawk, and Turnstile.",
  openGraph: {
    title: "Potato Projects",
    description: "A workshop of small, honest apps I make on the side.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Potato Projects",
    description: "A workshop of small, honest apps I make on the side.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Field />
        <Nav />
        <div className="relative">{children}</div>
      </body>
    </html>
  );
}
