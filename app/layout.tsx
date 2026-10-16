import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://walima-phi.vercel.app";
const title = "Walima | Muhammad Zeeshan Azhar Malik";
const description = "Sunday, 8th November 2026 at 7:00 PM onwards. Zoom Executive Marquee, West Canal Road.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Walima Invitation",
    title,
    description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Walima invitation for Muhammad Zeeshan Azhar Malik" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}