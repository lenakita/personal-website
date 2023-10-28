'use client';

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { useState } from "react";

export default function Aethia() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className="text-center pt-[120px] md:pt-24">
        <div className="bg-stone-300 dark:bg-gray-800 dark:text-slate-100 text-slate-700 text-center pt-20">
          <header>
            <Navigation />
          </header>
          <main>
            <h1>Aethia</h1>
            <p>Some description</p>
          </main>
          <Footer></Footer>
        </div>
    </div>
  )
}