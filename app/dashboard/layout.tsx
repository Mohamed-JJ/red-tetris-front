import type { Metadata } from "next";
import "./../globals.css";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "red-tetrix dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
