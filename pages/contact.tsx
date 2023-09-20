'use client';

import { useState } from "react";
import footer from "./footer"
import navigation from "./nav"

export default function Contact() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div>
      <main>
        <div>{navigation(darkMode, setDarkMode)}</div>
        <div>{footer()}</div>
      </main>
    </div>
  )
}