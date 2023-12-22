"use client";
import { usePostsQuery } from "@/queries";

import styles from "./page.module.css";

export default function Home() {
  const { data } = usePostsQuery();

  return <main className={styles.main}></main>;
}
