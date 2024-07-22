import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uni Ladder",
  description:
    "Uni Ladder Consultancy is a London based international students recruitment agency.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen font-poppins">{children}</body>
    </html>
  );
}
