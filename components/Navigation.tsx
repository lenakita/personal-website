import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import { BsMoonStarsFill } from "react-icons/bs";

export default function Navigation(): React.JSX.Element {
  const navItems: string[] = [
    'Home',
    'Bio',
    'Books',
    'Aethia',
    'Gallery',
  ]

  const { systemTheme, theme, setTheme } = useTheme();

  return (
    <div>
      <nav id="navbar-sticky" className="flex sm:flex-col flex-row justify-center bg-emerald-700 dark:bg-emerald-900 text-stone-200 pt-12 pb-12 pl-20 pr-20 border-b border-stone-400 dark:border-stone-200">
        <ul className="flex rounded-lg border-2 border-stone-400 dark:border-stone-200 bg-emerald-800 pt-5 pb-5">
          {generateNavList(navItems)}
          <li className="pl-16">
            <BsMoonStarsFill
              onClick={() => theme == "dark"? setTheme("light"): setTheme("dark")}
              className="cursor-pointer text-2xl"
            />
          </li>
        </ul>
      </nav>
    </div>
  )
}

function generateNavList(navItems: string[]): React.JSX.Element[] {
  let reactNavItems: React.JSX.Element[] = [];

  for (const navItem of navItems) {
    let hrefLink = navItem.toLowerCase();
    if (navItem == 'Home') {
      hrefLink = '/';
    }
    reactNavItems.push(<li key={navItem} className="pl-16 pr-16">
      <Link className="font-semibold" href={hrefLink}>
        {navItem}
      </Link>
    </li>);
  }

  return reactNavItems;
}
