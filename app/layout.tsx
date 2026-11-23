import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "NOVACORE Technologies — Building the next generation of technology", template: "%s | NOVACORE Technologies" },
  description: "NOVACORE Technologies designs and builds software, automation, digital products, and dependable technology infrastructure.",
  applicationName: "NOVACORE Technologies",
  keywords: ["NOVACORE Technologies", "software development", "automation", "digital products", "technology infrastructure"],
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
