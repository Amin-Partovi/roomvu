"use client";
import { ThemeToggle } from "@/components/fragments";
import styles from "./page.module.css";
import { usePostsQuery } from "@/queries";

export default function Home() {
  const { data } = usePostsQuery();

  return (
    <main className={styles.main}>
      <ThemeToggle />
    </main>
  );
}
