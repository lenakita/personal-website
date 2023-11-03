'use client';

import pfp from '../public/pfp-alt.jpg'
import Image from 'next/image'
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { AiFillGithub, AiFillMail, AiFillYoutube } from 'react-icons/ai';
import Link from 'next/link';

export default function Homepage() {
  return (
    <div className="bg-stone-300 dark:bg-gray-800 dark:text-slate-100 text-slate-700 text-center pt-40">
      <header>
        <Navigation />
      </header>
      <main className="pb-10">
        <h1>Elena Thomas</h1>
        <div className="pt-2 pb-4">Author, Software Engineer, Daydreamer</div>
        <div><em>
          <span className="text-stone-600 dark:text-stone-200 hover:underline">
          <Link href="https://www.stonewall.org.uk/about-us/news/international-pronouns-day">Pronouns</Link>
          </span>
          : she/her and they/them
        </em></div>
        <ul className="flex flex-row justify-center text-4xl pt-5">
          <li>
            <Link href="https://www.youtube.com/@elenathomas6213/featured">
              <AiFillYoutube className="cursor-pointer text-red-400 dark:text-red-600 mr-3" />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/lenakita">
              <AiFillGithub className="cursor-pointer text-black dark:text-white mr-3" />
            </Link>
          </li>
          <li>
            <Link href="mailto:someemail@gmail.com">
              <AiFillMail className="cursor-pointer text-emerald-700 dark:text-emerald-500" />
            </Link>
          </li>
        </ul>
        <p className="mx-auto max-w-prose pt-5">
          Hi, I&apos;m Elena. I&apos;m an author at heart and I love creating things from characters and worlds, 
          to software and even this website. I am also <em>quite</em> keen on music. I made this website as a way to share the various things I 
          create in my spare time. And for those curious about the page entitled &apos;Aethia&apos;, that is a world 
          I conceptualised many years ago and have put pen to paper for since. I hope you all enjoy seeing 
          what I have created. ☺️
        </p>
        <div className="relative mx-auto bg-gradient-to-b from-emerald-400 rounded-full w-80 h-80 mt-10 overflow-hidden md:h-96 md:w-96">
          <Image id="pfp" alt="Elena Thomas profile picture" src={pfp}/>
        </div>
      </main>
      <Footer></Footer>
    </div>
  )
}