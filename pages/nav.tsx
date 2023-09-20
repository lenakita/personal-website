import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function navigation(darkMode: boolean, setDarkMode: Dispatch<SetStateAction<boolean>>) {
  const navItems = [
    'Home',
    'Bio',
    'Books',
    'Aethia',
    'Gallery',
    'Contact',
  ]

  return(
    <div className="flex sm:flex-col flex-row justify-center dark:bg-emerald-900 bg-emerald-700 text-stone-200 pt-12 pb-12">
      <nav>
        <ul className="flex">
          {generateNavList(navItems)}
        </ul>
        <div className="order-2 pt-4 pr-5 md:pt-0 md:pr-20">
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl"
          />
        </div>
      </nav>
    </div>
  )
}

export function generateNavList(navItemsToCreate: string[]) {
  let navItems: React.JSX.Element[] = [];

  for (const navItem of navItemsToCreate) {
    let hrefLink = navItem.toLowerCase();
    if (navItem == 'Home') {
      hrefLink = '/';
    }
    navItems.push(<li key={navItem} className="pl-16 pr-16">
      <Link className="font-semibold hover:underline" href={hrefLink}>
        {navItem}
      </Link>
    </li>);
  }

  return navItems;
}

