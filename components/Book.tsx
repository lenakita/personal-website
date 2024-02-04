import React from "react";

export enum BookSeries {
  AETHIA='Aethia'
}

export enum Genres {
  FANTASY='Fantasy',
  MYSTERY='Mystery'
}

export enum Status {
  IN_PROGESS='In Progress',
  PROOF_READING='Proof Reading',
  PUBLISHED='Published'
}

export interface BookProps {
  title: string,
  status: Status,
  genres: Genres[],
  series: BookSeries,
  description: string
  preview: React.JSX.Element
}

export default function Book(props: BookProps): React.JSX.Element {
  /**
   * What would a book contain?
   *  - a title
   *  - genre(s)
   *  - what series it's in
   *  - a snappy description
   *  - a preview
   */

  return (
    <div>
      <div className="text-semibold text-left ml-20 mb-4 mr-20">
        <h2>{props.title}</h2>
        <hr className="h-px mb-2 mt-2 bg-gray-400 border-0 dark:bg-gray-700"/>
        <ul className="ml-4 mb-2 list-disc">
          <li><b>Status</b>: {props.status}</li>
          <li><b>Genres</b>: {...props.genres}</li>
          <li><b>Series</b>: {props.series}</li>
        </ul>
        <em><b>Description</b>: {props.description}</em><br/>
        <div className="my-4">
          <h3>Preview</h3>
          {props.preview}
        </div>
        <hr className="h-px mb-8 mt-2 bg-gray-400 border-0 dark:bg-gray-700"/>
      </div>
    </div>
  )
}