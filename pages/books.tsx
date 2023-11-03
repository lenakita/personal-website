'use client';

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Books() {
  return (
    <div className="text-center pt-[120px] md:pt-24">
      <div className="bg-stone-300 dark:bg-gray-800 dark:text-slate-100 text-slate-700 text-center pt-20">
      <header>
        <Navigation />
      </header>
      <main>
        <h1>Books</h1>
      </main>
      <Footer></Footer>
      </div>
    </div>
  )
}