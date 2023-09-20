'use client';

import { useState } from "react";
import { Footer, NavBar } from "@/utils";

export default function Bio() {
  const [darkMode, setDarkMode] = useState(true);
  const navigator = new NavBar();
  const footer = new Footer();

  return (
    <div className="text-center pt-[120px] md:pt-24">
      <div className={darkMode ? "dark" : ""}>
        <div>{navigator.navigation({
          darkMode: darkMode,
          setDarkMode: setDarkMode,
        })}</div>
        <div className="dark:bg-emerald-800 dark:text-slate-100 text-slate-700 bg-emerald-400 text-center">
          <main>
            <h1>Background & Bio</h1>
          </main>
        </div>
        <div>{footer.navigation()}</div>
      </div>
    </div>
  )
}