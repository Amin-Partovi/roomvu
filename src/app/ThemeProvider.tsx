"use client";

import { Montserrat } from "next/font/google";
import React from "react";

import { useAppSelector } from "@/store";

const montserrat = Montserrat({ subsets: ["latin"] });

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const isDarkMode = useAppSelector((state) => state.isDarkMode.value);
  return (
    <body
      className={montserrat.className}
      data-theme={isDarkMode ? "dark" : "light"}
    >
      {children}
    </body>
  );
};

export default ThemeProvider;
