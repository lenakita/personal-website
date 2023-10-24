import Link from "next/link";


export default function Footer() {
  const navItems: Record<string, string> = {
    'Email': 'mailto:elenathomas293@gmail.com',
    'Home': '/',
    'Goodreads': 'https://www.goodreads.com/user/show/155336112-elena',
    'Bio': '/bio/',
  }

  return (
    <div className="flex sm:flex-col flex-row pb-10 pt-10 justify-center dark:bg-emerald-900 bg-emerald-700 text-stone-200 pt-12 pb-12">
      <footer className="pt-16 text-stone-200">
          <ul className="grid grid-cols-2 gap-2">
          {generateNavList(navItems)}
        </ul>
      </footer>
    </div>
  )
}

function generateNavList(navItems: Record<string, string>): React.JSX.Element[] {
  let reactNavItems: React.JSX.Element[] = [];

  for (const navItem in navItems) {
    reactNavItems.push(<li key={navItem} className="pl-16 pr-16">
      <Link className="font-semibold hover:underline" href={navItems[navItem]}>
        {navItem}
      </Link>
    </li>);
  }

  return reactNavItems;
}
