'use client';

import pfp from '../public/pfp-alt.jpg'
import Image from 'next/image'
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Homepage() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex sm:flex-col flex-row pb-4">
        <Navigation></Navigation>
      </div>
      <h1>Elena Thomas</h1>
        <div className="pt-2 pb-4">Author, Software Engineer, Daydreamer</div>
        <div><em>
          <span className="dark:text-stone-200 text-stone-600 hover:underline">
          <a href="https://www.stonewall.org.uk/about-us/news/international-pronouns-day">Pronouns</a>
          </span>
          : she/her and they/them
        </em>
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-emerald-400 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
          <Image alt="Elena Thomas profile picture" src={pfp} objectFit="cover"/>
        </div>
      <Footer></Footer>
    </div>
  )
}