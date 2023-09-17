import footer from "./footer"
import navigation from "./nav"

export default function books() {
  return (
    <div className="text-center pt-[120px] md:pt-24">
      <main>
        <div>{navigation()}</div>
        <div>{footer()}</div>
      </main>
    </div>
  )
}
