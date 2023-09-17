/**
 * In the footer:
 *  - website navigation
 *  - contact details
 */

import Link from "next/link";

export default function footer() {
  return (
    <div className="pt-8">
      <div className="bg-emerald-800 pb-8">
        <div className="flex sm:flex-column flex-row justify-center pb-12">
        <footer className="pt-16 text-stone-100">
          <ul className="flex">
            <li className="cursor-pointer pl-6 pr-6">
              <Link
                className="hover:underline"
                href="mailto:elenathomas293@gmail.com"
              >
                Email
              </Link>
            </li>
            <li className="cursor-pointer pl-6 pr-6">
              <Link
                className="hover:underline"
                href="https://www.goodreads.com/user/show/155336112-elena"
              >
                Goodreads
              </Link>
            </li>
          </ul>
        </footer>
        </div>
      </div>
    </div>
  )
}