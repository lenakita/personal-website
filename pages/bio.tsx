'use client';

import LenniePfp from "../public/lennie-pfp.jpg";
import LennieAlt from "../public/another-lennie-picture.jpg";
import LennieOther from "../public/other-lennie-pic.jpg";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ImageGallery from "@/components/Gallery";
import Link from "next/link";
import React from "react";

interface FactGridProps {
  title: string,
  items: Record<string, string>,
}

export default function Bio() {
  return (
    <div className="text-center pt-[120px] md:pt-24">
        <div className="bg-stone-300 dark:bg-gray-800 dark:text-slate-100 text-slate-700 pt-20">
        <header>
          <Navigation/>
        </header>
        <main className="mx-auto max-w-prose pb-5">
          <h1>About Me</h1>
          <br />
          <p className="text-left">
            Hello again, and welcome to the bio page of my website. I hope that sharing a little about myself 
            can help in understanding my work and how I write. I love diversity of people in media, be that books, 
            films or video games because it&apos;s a reflection of real life. A lot of my characters, unintentionally mind 
            you, are inspired by people both real and fictional and I hope that if anyone reads my stories that they 
            come to love my characters as much as I do.
          </p>
          <br />
          <h2 className="pb-4">Favourite Things</h2>
          <div className="pl-24">
            {generateFactGrid({
              title: 'Favourite Things',
              items: {
                'Fiction Book': 'Hogfather',
                'Non-fiction Book': 'The Snow Leopard',
                'Animated Film': 'Nausicaa of the Valley of the Wind',
                'Live Action Film': 'Blade Runner',
                'Video Game Series': 'Xenoblade',
                'Food': 'Chocolate',
              }
            })}
          </div>
          <br />
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
              I passed ABRSM Grade Eight piano aged sixteen. Since then I have not taken another music exam because
              of the limitation of having to learn three pieces to perfection. I much prefer learning a variety of
              songs and I have found that helped with my sight reading of music as well. Classical and video game scores#
              are my favourite types of music. Especially games like Xenoblade. Seriously,
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
              I studied for a chemistry degree for two months at the University of Liverpool before deciding to
              change courses since I felt that something creative like Computer Science would be a better fit for me.
              In the long run it was for the best, because the creativity I can exercise with software
              is really awesome.
            </li>
            <li>
              I also love cats! 🐱 There are some pictures below of my parent&apos;s cat, Lennie. A fact about him
              is that he grew up on the streets of Sheffield before he was rescued. He has lived with us for the
              ten years since.
            </li>
          </ul>
          <div className="pb-10">
            <ImageGallery images={[{
              source: LenniePfp,
              alt: 'Lennie',
            },
            {
              source: LennieAlt,
              alt: 'Another Lennie',
            },
            {
              source: LennieOther,
              alt: 'Yet another Lennie',
            }]}/>
          </div>
        </main>
        <Footer/>
      </div>
    </div>
  )
}

function generateFactGrid(props: FactGridProps): React.JSX.Element {
  const items: React.JSX.Element[] = [];
  const style = 'py-1 pr-10';

  for (const item in props.items) {
    items.push(
      <tr>
        <td className={style}>
          <em>{item}</em>
        </td>
        <td className={style}>
          {props.items[item]}
        </td>
      </tr>
    )
  }

  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr className="border-b-2 border-stone-400 bg-stone-300 dark:bg-stone-700">
            <th className="pr-10">
              Thing
            </th>
            <th className="pr-10">Favourite</th>
          </tr>
          {...items}
        </thead>
      </table>
    </div>
  )
}
