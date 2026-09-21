import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://visualyou.sanjar.net"),
  title: "Visual You — Your progress, visualized",
  description: "A habit-tracking app that turns daily choices into visible progress across your body, calendars, graphs, plans, streaks, and rewards.",
  keywords: ["habit tracker", "visual progress", "workout tracker", "streaks", "gradual reduction", "AI coach"],
  openGraph: {
    title: "Visual You — Your progress, visualized",
    description: "Turn daily choices into visible progress across your body, calendars, graphs, plans, streaks, and rewards.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Visual You — Your choices. Your progress. Visualized." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visual You — Your progress, visualized",
    description: "Turn daily choices into visible progress.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}
