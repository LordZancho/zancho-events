import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zancho Events",
  description: "Event appointment system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}