import { ThemeToggle } from "@/components/fragments";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <ThemeToggle />
    </main>
  );
}
