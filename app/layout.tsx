import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanjar — Digital products with purpose",
  description: "Sanjar's personal profile, company, and digital products.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}
