import type { Metadata } from "next";

import { StoreProvider } from "@/store";
import ThemeProvider from "./ThemeProvider";

import { ReactQueryProvider } from "@/queries";
import Container from "./_layout/Container";
import Header from "./_layout/Header";

import "./globals.scss";

export const metadata: Metadata = {
  title: "Overreacted",
  description: "Recreate Dan Abramov’s personal weblog using React.",
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
          <ReactQueryProvider>
            <Container>
              <Header />
              {children}
            </Container>
          </ReactQueryProvider>
        </ThemeProvider>
      </StoreProvider>
    </html>
  );
}
