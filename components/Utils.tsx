import React from "react"

export function multiBreak(nBreaks: number): React.JSX.Element {
  let breaks: React.JSX.Element[] = [];
  for (let i = 0; i < nBreaks; i++) {
    breaks.push(<br/>)
  }

  return (
    // use <em> because embedding <div> in a <p> tag breaks it :)
    // `...breaks` unpacks the array
    <em>
      {...breaks}
    </em>
  )
}