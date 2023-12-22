"use client";

import React from "react";

import { TEXTS } from "@/utils";
import { ThemeToggle } from "@/components/fragments";

import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{TEXTS.TITLE}</h1>
      <div className={styles["header-right-part"]}>
        <span className={styles.author}>{TEXTS.AUTHOR}</span>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
