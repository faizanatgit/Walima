import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://walima-invitation.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Walima",
  description: "You are invited to celebrate the Walima Reception of Muhammad Zeeshan Azhar Malik.",
  openGraph: { title: "Walima Reception | Muhammad Zeeshan Azhar Malik", description: "Friday, 6th November 2026 - West Canal Road, Farooqabad, Mansoorabad" },
  twitter: { card: "summary_large_image", title: "Walima Reception | Muhammad Zeeshan Azhar Malik" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}