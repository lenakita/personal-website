import Link from "next/link";
import React from "react";


export default function Footer(): React.JSX.Element {
  const navItems: Record<string, string> = {
    'Email': 'mailto:someemail@gmail.com',
    'Home': '/',
    'Goodreads': 'https://www.goodreads.com/user/show/155336112-elena',
    'Bio': '/bio/',
  }

  return (
    <div className="flex sm:flex-col flex-row pb-10 pt-5 justify-center dark:bg-emerald-900 bg-emerald-700 text-stone-200 pt-12 pb-12 border-t border-stone-400 dark:border-stone-200">
      <footer className="pt-10 text-stone-200 pl-20 pr-20">
        <ul className="grid grid-cols-2 gap-2 rounded-lg border-2 border-stone-400 dark:border-stone-200 bg-emerald-800 pt-5 pb-5">
          {generateNavList(navItems)}
        </ul>
      </footer>
    </div>
  )
}

function generateNavList(navItems: Record<string, string>): React.JSX.Element[] {
  let reactNavItems: React.JSX.Element[] = [];

  for (const navItem in navItems) {
    reactNavItems.push(
    <li key={navItem} className="pl-16 pr-16">
      <Link className="font-normal" href={navItems[navItem]}>
        {navItem}
      </Link>
    </li>);
  }

  return reactNavItems;
}
