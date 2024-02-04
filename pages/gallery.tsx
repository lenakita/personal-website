'use client';

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

export default function Gallery() {
  return (
    <div className="text-center pt-[120px] md:pt-24">
        <div className="bg-stone-300 dark:bg-gray-800 text-slate-700 dark:text-slate-100 text-center pt-20">
        <header>
          <Navigation/>
        </header>
        <main>
          <h1>Gallery</h1>
        </main>
        <Footer/>
      </div>
    </div>
  )
}