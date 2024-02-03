'use client';

import Book, { BookSeries, Genres } from "@/components/Book";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { answersPreview, deathsGambitPreview } from "@/text/previews";

export default function Books() {
  return (
    <div className="text-center pt-[120px] md:pt-24">
      <div className="bg-stone-300 dark:bg-gray-800 dark:text-slate-100 text-slate-700 text-center pt-20">
      <header>
        <Navigation />
      </header>
      <main>
        <h1>Books</h1>
        <Book
          title="Answers in the Clouds"
          genres={[Genres.FANTASY]}
          series={BookSeries.AETHIA}
          description="A book about some cool people"
          preview={answersPreview}
        />
        <Book
          title="Death's Gambit"
          genres={[Genres.MYSTERY]}
          series={BookSeries.AETHIA}
          description="A book about some other cool people"
          preview={deathsGambitPreview}
        />
      </main>
      <Footer></Footer>
      </div>
    </div>
  )
}