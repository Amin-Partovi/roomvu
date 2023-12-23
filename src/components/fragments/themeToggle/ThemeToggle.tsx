"use client";

import { Moon, Sun } from "lucide-react";

import { useAppDispatch, useAppSelector } from "@/store";
import { toggleTheme } from "./themeToggleSlice";

import styles from "./theme-toggle.module.scss";

const ThemeToggle = () => {
  const isDarkMode = useAppSelector((state) => state.isDarkMode.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <input
        type="checkbox"
        id="dark-mode-toggle"
        className={styles["theme-toggle-input"]}
        aria-label="toggle theme"
        onChange={() => dispatch(toggleTheme())}
        checked={isDarkMode}
      />

      <label
        htmlFor="dark-mode-toggle"
        className={styles["theme-toggle-label"]}
      >
        <Sun
          className={styles["sun-icon"]}
          width={24}
          color="gray"
          data-testid="sun-icon"
        />

        <Moon
          className={styles["moon-icon"]}
          width={24}
          color="gray"
          data-testid="moon-icon"
        />
      </label>
    </>
  );
};

export default ThemeToggle;
