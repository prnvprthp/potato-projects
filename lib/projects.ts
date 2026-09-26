export type Platform = "web" | "desktop";
export type Status = "live" | "build";

export type ProjectLink = { label: string; href: string };

export type Project = {
  slug: string;
  name: string;
  /** Fallback monogram shown when `icon` is absent. */
  mono: string;
  /** Per-app accent colour. This is the only colour the project owns. */
  accent: string;
  /** Path under /public, e.g. "/icons/days.svg". Omit to use the monogram. */
  icon?: string;
  platform: Platform;
  /** Human label for where it runs. Defaults per platform if omitted. */
  platformLabel?: string;
  status: Status;
  version?: string;
  /** One-line summary used on the card. */
  tagline: string;
  /** Longer paragraphs for the detail page, written in my own voice. */
  long: string[];
  /** Three concrete things the app does, shown under "Inside". */
  highlights: string[];
  /** Tech chips. */
  stack: string[];
  /** Action buttons. First one is the primary (accent) button. */
  links: ProjectLink[];
};

export const STATUS_LABEL: Record<Status, string> = {
  live: "Live",
  build: "In the oven",
};

export function platformLabel(p: Project): string {
  if (p.platformLabel) return p.platformLabel;
  return p.platform === "web" ? "Web app" : "Desktop app";
}

/**
 * Where a card should send you: the app itself, not a detail page on the way to
 * it. Only web apps open directly — a desktop app's first link is a platform
 * specific download, and a card click should never start one. Those keep going
 * to the detail page, where you pick macOS or Windows yourself.
 */
export function liveUrl(p: Project): string | undefined {
  if (p.status !== "live" || p.platform !== "web") return undefined;
  return p.links.find((l) => l.href.startsWith("http"))?.href;
}

export const PROJECTS: Project[] = [
  {
    slug: "days",
    name: "Days",
    mono: "D",
    accent: "#F5A623",
    icon: "/icons/days.svg",
    platform: "web",
    status: "live",
    tagline:
      "One calm calendar for the whole day: birthdays, weather, and the dates I care about.",
    long: [
      "I wanted one calm place to start the day instead of checking five different apps, so I made Days.",
      "It quietly reads my family's birthdays from Kinship, so the two stay in sync without me lifting a finger.",
    ],
    highlights: [
      "Birthdays pulled in from Kinship",
      "Weather, news, and sport I follow",
      "One place for the whole day",
    ],
    stack: ["Next.js 16", "React 19", "Supabase", "Vercel"],
    links: [{ label: "Open Days", href: "https://days-track.vercel.app" }],
  },
  {
    slug: "kinship",
    name: "Kinship",
    mono: "K",
    accent: "#E8688E",
    icon: "/icons/kinship.svg",
    platform: "web",
    status: "live",
    version: "v1.8.2",
    tagline:
      "A living family tree: every relationship, generation, and birthday in one place.",
    long: [
      "I built Kinship to map my family the way it actually is, with partners, generations, and the relationships between everyone in a tree I can keep growing.",
      "I can invite relatives to fill in their own branches, and Days picks up the birthdays from here.",
    ],
    highlights: [
      "Partners, generations, and relationships",
      "Invite relatives to add their branches",
      "Import and export the whole tree",
    ],
    stack: ["Next.js 16", "Prisma", "Supabase", "Vercel"],
    links: [{ label: "Open Kinship", href: "https://kinship-bay.vercel.app" }],
  },
  {
    slug: "marquee",
    name: "Marquee",
    mono: "M",
    accent: "#E5484D",
    icon: "/icons/marquee.svg",
    platform: "web",
    status: "live",
    tagline:
      "A home for everything I watch, with a gentle nudge toward what to watch next.",
    long: [
      "I kept losing track of what I had seen and what I meant to see next, so I made Marquee to hold all of it.",
      "It learns from what I love, and what I skip, and points me toward the next thing worth an evening.",
    ],
    highlights: [
      "Rate and shelve films and shows",
      "Collections, universes, and seasons",
      "Recommendations that learn my taste",
    ],
    stack: ["Next.js 16", "Drizzle", "Supabase", "TMDB"],
    links: [{ label: "Open Marquee", href: "https://marquee-inky.vercel.app" }],
  },
  {
    slug: "lift",
    name: "Lift",
    mono: "L",
    accent: "#F97316",
    icon: "/icons/lift.svg",
    platform: "web",
    status: "live",
    tagline: "A gym tracker that stays out of the way. Log every set, watch it climb.",
    long: [
      "I wanted a gym tracker that stayed out of my way, so Lift keeps to the essentials: start a workout, add exercises, log the sets.",
      "I can come back to any past session and edit it inline, in whatever units I think in.",
    ],
    highlights: [
      "A big built-in exercise library",
      "Quick plus and minus set logging",
      "Weights, reps, cardio, and incline",
    ],
    stack: ["Next.js 16", "Drizzle", "Supabase"],
    links: [{ label: "Open Lift", href: "https://lift-spirit.vercel.app" }],
  },
  {
    slug: "storied",
    name: "Storied",
    mono: "S",
    accent: "#C46A43",
    icon: "/icons/storied.svg",
    platform: "web",
    status: "build",
    tagline: "A gentle way to capture a life story, one question at a time.",
    long: [
      "Storied comes from a simple wish: to sit someone down and really hear their story. It asks one warm question at a time, then gathers the answers into a book with photos and a family map.",
      "I care a lot about privacy here, so it is free by design, the words stay on the server, and it always works even with no AI at all.",
    ],
    highlights: [
      "One warm question at a time",
      "Answers become a chaptered book",
      "Private and free by design",
    ],
    stack: ["Next.js 16", "Drizzle", "Supabase", "AI"],
    links: [{ label: "Coming soon", href: "#" }],
  },
  {
    slug: "flightsight",
    name: "FlightSight",
    mono: "F",
    accent: "#3E8EF7",
    icon: "/icons/flightsight.svg",
    platform: "web",
    status: "live",
    version: "v1.6.0",
    tagline:
      "Every boarding pass becomes a trip card, and every trip adds to my travel story.",
    long: [
      "I love flying, so I made FlightSight to turn each boarding pass into something worth keeping. I scan or photograph it, the app reads the barcode, or the printed text as a fallback, and it fills in the aircraft and route.",
      "Every trip becomes an airline themed card, and over time they add up to a travel library and stats I enjoy looking back on.",
    ],
    highlights: [
      "Reads the boarding pass on-device",
      "Airline themed trip cards",
      "A growing travel library and stats",
    ],
    stack: ["Next.js 16", "Supabase", "Drizzle", "Barcode / OCR"],
    links: [{ label: "Open FlightSight", href: "https://flightsight-gamma.vercel.app" }],
  },
  {
    slug: "kept",
    name: "Kept",
    mono: "K",
    accent: "#8C7BF0",
    icon: "/icons/kept.svg",
    platform: "web",
    status: "build",
    tagline: "A calm place to write, by hand or by keyboard. My journal, kept for free.",
    long: [
      "Kept is the journal I wanted for myself: a calm place to write, whether I type or write by hand.",
      "I built it as its own thing, kept private and always free, with no subscription hanging over my thoughts.",
    ],
    highlights: [
      "Type it, or write it by hand",
      "Private, and always free",
      "A calm space to think",
    ],
    stack: ["Next.js", "Supabase"],
    links: [{ label: "Coming soon", href: "#" }],
  },
  {
    slug: "squawk",
    name: "Squawk",
    mono: "◎",
    accent: "#2FCB6E",
    platform: "desktop",
    platformLabel: "macOS, Windows and Fire TV",
    status: "live",
    version: "v1.4.1",
    tagline:
      "The planes overhead, on a retro radar that sits quietly in your menu bar or system tray.",
    long: [
      "Squawk started as a small curiosity about the planes flying over my house. It lives in the menu bar, or the Windows system tray, and shows the aircraft near me on a sweeping retro radar.",
      "The data comes from keyless, open ADS-B feeds. It runs on both macOS and Windows, and each one comes with a matching screensaver.",
      "The screensaver also runs on Fire TV. It shows one plane at a time, with its route, altitude and speed, next to a radar of everything else in range.",
      "It does not have to watch your own sky, either. Point it at a city, an airport code, or a pair of coordinates and the radar moves there.",
    ],
    highlights: [
      "Live planes on a sweeping radar",
      "Point it at any city or airport",
      "Keyless, open ADS-B data",
      "Flags planes taking off and landing nearby",
      "Runs on macOS and Windows",
      "A screensaver for Fire TV",
    ],
    stack: ["Swift", "SwiftUI", "C#", "Java", "ADS-B"],
    links: [
      {
        label: "Download for macOS",
        href: "https://github.com/prnvprthp/squawk/releases/latest/download/Squawk.dmg",
      },
      {
        label: "Download for Windows",
        href: "https://github.com/prnvprthp/squawk/releases/latest/download/Squawk-Windows.zip",
      },
      {
        label: "Download for Fire TV",
        href: "https://github.com/prnvprthp/squawk/releases/latest/download/Squawk-FireTV.apk",
      },
      { label: "Source", href: "https://github.com/prnvprthp/squawk" },
    ],
  },
  {
    slug: "faraway",
    name: "Faraway",
    mono: "▦",
    accent: "#B8690F",
    icon: "/icons/faraway.svg",
    platform: "desktop",
    platformLabel: "macOS and Fire TV",
    status: "live",
    version: "v0.5.0",
    tagline:
      "A live wall of famous places around the world, as a screensaver for your Mac or TV.",
    long: [
      "Faraway fills the screen with live cameras from famous places: Times Square, Sydney Harbour, Mount Fuji, the Rhine Falls, a coral reef, a waterhole in Kenya. Four or nine at a time, or one big one.",
      "I picked every view by hand. No traffic lights or street corners, just landmarks and scenery, and each one was checked to be sharp and in HD. Views sit out when it's dark where they are, so it never turns into a wall of black squares at 3 am.",
      "On the Mac it takes over when the computer has been idle and disappears the moment you touch anything. On Fire TV it's a screensaver, where you can pick the places and how long each one stays up.",
    ],
    highlights: [
      "Hand-picked landmarks and scenery, live and in HD",
      "Skips places where it's dark right now",
      "A screensaver for the Mac and for Fire TV",
    ],
    stack: ["Next.js", "TypeScript", "Swift", "Java", "YouTube"],
    links: [
      {
        label: "Download for macOS",
        href: "https://github.com/prnvprthp/faraway/releases/latest/download/Faraway.dmg",
      },
      {
        label: "Download for Fire TV",
        href: "https://github.com/prnvprthp/faraway/releases/latest/download/Faraway-FireTV.apk",
      },
      { label: "Install guide", href: "https://github.com/prnvprthp/faraway" },
    ],
  },
  {
    slug: "turnstile",
    name: "Turnstile",
    mono: "╪",
    accent: "#12A6A0",
    platform: "desktop",
    platformLabel: "macOS",
    status: "build",
    tagline:
      "Live trains gliding across a clean transit diagram, right in the menu bar.",
    long: [
      "Turnstile is the transit cousin of Squawk. It draws a clean, schematic diagram of a city's metro and glides the trains along the lines in their real colours, right in the menu bar.",
      "Where a city shares live positions it shows them, and where it does not, it gently projects the timetable to now. It never pretends a schedule is GPS.",
    ],
    highlights: [
      "A clean, schematic transit diagram",
      "Trains in their official line colours",
      "Live where possible, scheduled elsewhere",
    ],
    stack: ["Swift", "SwiftUI", "GTFS"],
    links: [{ label: "Coming soon", href: "#" }],
  },
  {
    slug: "tankful",
    name: "Tankful",
    mono: "T",
    accent: "#7CB518",
    icon: "/icons/tankful.svg",
    platform: "web",
    status: "build",
    tagline:
      "Tells you where to stop for gas on a road trip, and how much to buy at each one.",
    long: [
      "Tankful works out the cheapest way to drive somewhere. You tell it where you're going and how much range you have left, and it plans the fuel stops around the stations you'd actually pull into.",
      "It chains the trip through the brands you pick — Costco first, if you're a member — and only sends you somewhere else when the next one is out of range. There's always a buffer built in, because I didn't want an app that saves me four dollars by having me coast in on fumes.",
      "When the plan is ready it hands the whole thing to Google Maps with the stops already in it, so there's nothing left to type in.",
    ],
    highlights: [
      "Chains your trip through the brands you choose",
      "Always leaves a comfortable reserve in the tank",
      "Opens in Google Maps with every stop already added",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "OpenStreetMap"],
    links: [{ label: "Open", href: "https://tankful-trip.vercel.app" }],
  },
  {
    slug: "spent",
    name: "Spent",
    mono: "S",
    accent: "#B4794A",
    platform: "web",
    status: "build",
    tagline:
      "Tracks where the money went, and works out who owes who.",
    long: [
      "Spent is two apps that turned out to be one. Half of it reads my bank and card statements and sorts out where the money actually goes. The other half splits things with the people I spend it with, and keeps a running total of who's ahead.",
      "Keeping them together is the whole point. A dinner on the card can become a split without me typing it in twice, a shared subscription divides itself every month, and I get one net figure per person instead of a separate app to go and check.",
      "It reads the statements itself rather than asking a bank aggregator to do it, which keeps the whole thing free and keeps the statements on my own machine.",
    ],
    highlights: [
      "Turns a statement line straight into a split",
      "One net balance per person, across every group",
      "Reads bank and card PDFs without a paid data provider",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Drizzle"],
    links: [],
  },
];

// Live apps first, "in the oven" last. Array.sort is stable, so projects with
// the same status keep their authored order.
const liveFirst = (a: Project, b: Project) =>
  a.status === b.status ? 0 : a.status === "live" ? -1 : 1;

export const WEB_PROJECTS = PROJECTS.filter((p) => p.platform === "web").sort(
  liveFirst
);
export const DESKTOP_PROJECTS = PROJECTS.filter(
  (p) => p.platform === "desktop"
).sort(liveFirst);

export function getProject(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
