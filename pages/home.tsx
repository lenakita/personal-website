import pfp from '../public/pfp-alt.jpg'
import Image from 'next/image'
import navigation from './nav'
import footer from './footer'

export default function homepage() {
  return (
    <div className="text-center pt-[120px]">
      <div>{navigation()}</div>
      <h1>Elena Thomas</h1>
        <div className="pt-2 pb-4">Author, software engineer, daydreamer</div>
        <div><em>
          <span className="text-stone-600 hover:underline">
          <a href="https://www.stonewall.org.uk/about-us/news/international-pronouns-day">Pronouns</a>
          </span>
          : she/her and they/them
        </em>
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-emerald-400 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
          <Image alt="Elena Thomas profile picture" src={pfp} layout="fill" objectFit="cover"/>
        </div>
        <div>{footer()}</div>
    </div>
  )
}