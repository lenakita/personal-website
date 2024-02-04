'use client';

import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SidebarNavigation from "@/components/SidebarNavigation";
import Link from "next/link";

export default function Aethia() {
  /**
   * What do we expect on a page about a world?
   *  - Overview, what makes this world special?
   *  - A map !!
   *  - Characters
   *  - Places
   *  - History
   *  - Stories (link to other page)
   */
  const parts = [
    'Overview',
    'Places',
    'History',
    'Characters',
    'Stories'
  ]

  return (
    <div className="text-center pt-[120px] md:pt-24">
        <div className="bg-stone-300 dark:bg-gray-800 dark:text-slate-100 text-slate-700 text-center pt-16">
          <header>
            <Navigation/>
          </header>
          <main>
            <div className="grid grid-cols-5">
              <div className="border-r-2 border-stone-400">
                <SidebarNavigation navItems={parts}/>
              </div>
              <div className="col-span-4 pt-6">
                <h1>Aethia</h1>
                <Overview/>
                <Places/>
                <History/>
                <Characters/>
                <Stories/>
              </div>
            </div>
          </main>
          <Footer/>
        </div>
    </div>
  )
}

function Overview() {
  return (
    <div id="Overview" className="py-10">
      <h2>Overview</h2>
      <p>Give an overview here</p>
    </div>
  )
}

function Places() {
  return (
    <div id="Places" className="py-10">
      <h2>Places</h2>
      <p>List some places here</p>
    </div>
  )
}

function History() {
  return (
    <div id="History" className="py-10">
      <h2>History</h2>
      <p>Give some history here</p>
    </div>
  )
}

function Characters() {
  return (
    <div id="Characters" className="py-10">
      <h2>Characters</h2>
      <p>Here are characters who have appeared in the stories so far.</p>
      <ul>
        <li>Lynne</li>
        <li>Mae</li>
        <li>Aegeus</li>
      </ul>
    </div>
  )
}

function Stories() {
  return (
    <div id="Stories" className="py-10">
      <h2>Stories</h2>
      <ul>
        <li className="text-teal-800 dark:text-teal-100">
          <Link href="/books#answers-in-the-clouds">
            Answers in the Clouds
          </Link>
        </li>
        <li className="text-teal-800 dark:text-teal-100">
          <Link href="/books#deaths-gambit">
            Death&apos;s Gambit
          </Link>
        </li>
      </ul>
    </div>
  )
}
