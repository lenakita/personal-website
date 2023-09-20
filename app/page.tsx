'use client';

import homepage from "@/pages/home"
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-emerald-800 dark:text-slate-100 text-slate-700 bg-emerald-400 text-center">
        <main>
          <div>{homepage(darkMode, setDarkMode)}</div>
        </main>
      </div>
    </div>
  )
}
