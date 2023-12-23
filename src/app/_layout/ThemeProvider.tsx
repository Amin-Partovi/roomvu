"use client";

import { Montserrat } from "next/font/google";
import React from "react";

import { useAppSelector } from "@/store";

import styles from "./theme-provider.module.scss";

const montserrat = Montserrat({ subsets: ["latin"] });

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const isDarkMode = useAppSelector((state) => state.isDarkMode.value);
  return (
    <div
      className={`${montserrat.className} ${styles["theme-provider"]}`}
      data-theme={isDarkMode ? "dark" : "light"}
    >
      {children}
    </div>
  );
};

export default ThemeProvider;
