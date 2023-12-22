"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { ThemeToggle } from "@/components/fragments";
import { ROUTES, TEXTS } from "@/utils";

import styles from "./header.module.scss";

const Header = () => {
  const path = usePathname();

  return (
    <header className={styles.header}>
      <h1
        className={`${styles.title} ${path !== "/" ? styles["home-link"] : ""}`}
      >
        <Link href={ROUTES.HOME}>{TEXTS.TITLE}</Link>
      </h1>

      <div className={styles["header-right-part"]}>
        <span className={styles.author}>{TEXTS.AUTHOR}</span>

        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
