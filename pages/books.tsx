'use client';

import Book, { BookSeries, Genres, Status } from "@/components/Book";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { answersPreview, deathsGambitPreview } from "@/text/previews";

export default function Books() {
  return (
    <div className="text-center pt-[120px] md:pt-24">
      <div className="bg-stone-300 dark:bg-gray-800 dark:text-slate-100 text-slate-700 text-center pt-20">
      <header>
        <Navigation/>
      </header>
      <main>
        <h1>Books</h1>
        <div id="answers-in-the-clouds">
          <Book
            title="Answers in the Clouds"
            status={Status.PROOF_READING}
            genres={[Genres.FANTASY]}
            series={BookSeries.AETHIA}
            description="A book about some cool people"
            preview={answersPreview}
          />
        </div>
        <div id="deaths-gambit">
          <Book
            title="Death's Gambit"
            status={Status.IN_PROGESS}
            genres={[Genres.MYSTERY]}
            series={BookSeries.AETHIA}
            description="A book about some other cool people"
            preview={deathsGambitPreview}
          />
        </div>
      </main>
      <Footer/>
      </div>
    </div>
  )
}