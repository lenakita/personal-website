/**
 * In the footer:
 *  - website navigation
 *  - contact details
 * 
 * TODO:
 *  - create function to populate footer, like in nav.tsx
 *  - tidy up footer alignment
 *  - fix footer colour on dark mode
 */

import Link from "next/link";

export default function footer() {
  return (
    <div className="pt-4">
      <div className="dark:bg-emerald-900 bg-emerald-700 pb-8">
        <footer className="pt-16 text-stone-200">
          <ul className="grid grid-cols-2 gap-2">
            <li key="email" className="cursor-pointer pl-6 pr-6">
              <Link
                className="hover:underline"
                href="mailto:elenathomas293@gmail.com"
              >
                Email
              </Link>
            </li>
            <li key="home" className="cursor-pointer pl-6 pr-6">
              <Link
                className="hover:underline"
                href="/"
              >
                Home
              </Link>
            </li>
            <li key="goodreads" className="cursor-pointer pl-6 pr-6">
              <Link
                className="hover:underline"
                href="https://www.goodreads.com/user/show/155336112-elena"
              >
                Goodreads
              </Link>
            </li>
            <li key="Bio" className="cursor-pointer pl-6 pr-6">
              <Link
                className="hover:underline"
                href="/bio/"
              >
                Bio
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  )
}