import { useEffect, useState } from "react";

import { Sun, Moon } from "lucide-react"

const ThemeToggle = () => {
  type theme = "light" | "dark";
  const [currentTheme, setCurrentTheme] = useState<theme>("dark");

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      const currentTheme = localStorage.getItem("theme") as theme;
      setCurrentTheme(currentTheme);
    }
  });

  const setThemeToggle = () => {
    const htmlRoot = document.querySelector("html");
    if (currentTheme == "light") {
      setCurrentTheme("dark");
      htmlRoot.dataset.theme = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      setCurrentTheme("light");
      htmlRoot.dataset.theme = "light";
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <div className="inline-block w-10">
        <button
          className="btn-base-100 rounded-btn btn h-10 w-10 transition-all duration-300 ease-in-out"
          onClick={setThemeToggle}
        >
          <span className="m-auto text-3xl">
            {currentTheme == "dark" ? <Sun /> : <Moon />}
          </span>
          <span className="sr-only">Theme toggle</span>
        </button>
      </div>
    </>
  );
};
export default ThemeToggle;
