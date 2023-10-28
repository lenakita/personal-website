'use client';

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { useState } from "react";

export default function Bio() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="text-center pt-[120px] md:pt-24">
        <div className="bg-stone-300 dark:bg-gray-800 dark:text-slate-100 text-slate-700 text-center pt-20">
        <header>
          <Navigation />
        </header>
        <main className="text-center mx-auto max-w-prose pb-5">
          <h1>About Me</h1>
          <br />
          <p>
            Hello again, and welcome to the bio page of my website. I hope that sharing a little about myself 
            can help in understanding my work and how I write. I love diversity of people in media, be that books, 
            films or video games because it&apos;s a reflection of real life. A lot of my characters, unintentionally mind 
            you, are inspired by people both real and fictional and I hope that if anyone reads my stories that they 
            come to love my characters as much as I do.
          </p>
          <br />
          <div className="py-5 grid grid-cols-2 gap-2">
            <ul className="list-none rounded-lg border-2 border-stone-400 dark:border-stone-800 bg-stone-300">
              <h3 className="border-b-2 border-stone-400">Hobbies</h3>
              <li className="py-2">
                Writing
              </li>
            </ul>
            <ul className="list-none rounded-lg border-2 border-stone-400 dark:border-stone-800 bg-stone-300">
              <h3 className="border-b-2 border-stone-400">Favourite Things</h3>
              <li className="py-2">
                Chocolate
              </li>
            </ul>
          </div>
          <h2>Some Facts</h2>
          <ul className="list-disc text-left pt-4">
            <li className="pb-2">
              I started writing stories at around fifteen years old. Then, I stopped for around six years. 
              What got me back into writing was being a Dungeon Master for a Dungeons & Dragons campaign. 
              I made the mistake of <Link
                className="text-teal-800 dark:text-teal-100"
                href="https://dungeonsdragons.fandom.com/wiki/Homebrew"
              >homebrewing</Link> everything,
              from the setting to some of the abilities. I have vowed to keep it simpler next time...
            </li>
            <li className="pb-2">
              I passed ABRSM Grade Eight piano aged sixteen. Since then I have sworn never to take another music exam.
              However, I still enjoy playing from time to time. Classical and video game scores are my favourites.
              Especially games like Xenoblade. Seriously,
              the soundtrack is <Link
                className="text-teal-800 dark:text-teal-100"
                href="https://www.youtube.com/watch?v=xiZttYHSweE"
              >beautiful</Link>. 🥰
            </li>
            <li className="pb-2">
              I enjoy hiking in my spare time. If you are interested the <Link
                className="text-teal-800 dark:text-teal-100"
                href="/gallery"
              >Gallery</Link> page is full of pictures I have taken. I live near the
              Lake District National Park in the United Kingdom, so I am incredibly
              fortunate to have some amazing countryside on my doorstep.
            </li>
            <li className="pb-2">
              I studied for a chemistry degree for two months at the University of Liverpool before dropping out.
              After some time out I went back and completed a Computer Science degree which is why I now work in
              software. In the long run it was for the best, because the creativity I can exercise with software
              is really awesome.
            </li>
            <li>
              I also love cats! 🐱 There are some pictures below of my parent&apos;s cat, Lennie. A fact about him
              is that he grew up on the streets of Sheffield before he was rescued. He has lived with us for the
              ten years since.
            </li>
          </ul>
        </main>
        <Footer></Footer>
      </div>
    </div>
  )
}