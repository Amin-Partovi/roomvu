import type { Metadata } from "next";

import { StoreProvider } from "@/store";
import ThemeProvider from "./ThemeProvider";

import "./globals.scss";
import { ReactQueryProvider } from "@/queries";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StoreProvider>
        <ThemeProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ThemeProvider>
      </StoreProvider>
    </html>
  );
}
