import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pavan's Fashions - Big Shopping Festival",
  description: "Shop for Electronics, Fashion, Home & Kitchen and more at best prices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
