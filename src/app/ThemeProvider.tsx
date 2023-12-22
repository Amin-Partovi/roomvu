"use client";

import { Inter } from "next/font/google";
import React from "react";

import { useAppSelector } from "@/store";

const inter = Inter({ subsets: ["latin"] });

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const isDarkMode = useAppSelector((state) => state.isDarkMode.value);
  return (
    <body
      className={inter.className}
      data-theme={isDarkMode ? "dark" : "light"}
    >
      {children}
    </body>
  );
};

export default ThemeProvider;
