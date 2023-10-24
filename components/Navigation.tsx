import Link from "next/link";
import { BsMoonStarsFill } from "react-icons/bs";

export default function Navigation() {
  const navItems: string[] = [
    'Home',
    'Bio',
    'Books',
    'Aethia',
    'Gallery',
    'Contact',
  ]

  return (
    <div className="flex sm:flex-col flex-row pb-10 pt-10 justify-center dark:bg-emerald-900 bg-emerald-700 text-stone-200 pt-12 pb-12">
      <nav>
        <ul className="flex">
          {generateNavList(navItems)}
          <li className="pl-16">
            <BsMoonStarsFill
              onClick={() => console.log('I would set dark mode, but I am not ready for that yet :)')}
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
      <Link className="font-semibold hover:underline" href={hrefLink}>
        {navItem}
      </Link>
    </li>);
  }

  return reactNavItems;
}
