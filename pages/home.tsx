'use client';

import pfp from '../public/pfp-alt.jpg'
import Image from 'next/image'
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Homepage() {
  return (
    <div className="bg-stone-300 dark:bg-gray-800 dark:text-slate-100 text-slate-700 text-center pt-40">
      <header>
        <Navigation />
      </header>
      <main>
        <h1>Elena Thomas</h1>
        <div className="pt-2 pb-4">Author, Software Engineer, Daydreamer</div>
        <div><em>
          <span className="dark:text-stone-200 text-stone-600 hover:underline">
          <a href="https://www.stonewall.org.uk/about-us/news/international-pronouns-day">Pronouns</a>
          </span>
          : she/her and they/them
        </em></div>
        <div className="relative mx-auto bg-gradient-to-b from-emerald-400 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
          <Image id="pfp" alt="Elena Thomas profile picture" src={pfp}/>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}