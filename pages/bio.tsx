'use client';

import { useState } from "react";
import footer from "./footer"
import navigation from "./nav"

export default function bio() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="text-center pt-[120px] md:pt-24">
      <main>
        <div className={darkMode ? "dark" : ""}>
          <div>{navigation(darkMode, setDarkMode)}</div>
          <div>{footer()}</div>
        </div>
      </main>
    </div>
  )
}