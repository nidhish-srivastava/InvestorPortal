import Link from "next/link"
import PrevIcon from "../Icons/PrevIcon"

function BackNavHeader({ route, children }) {
  return (
    <div className="flex gap-2 px-2 mt-2 items-center">
      <Link href={`/${route ? route : "projects"}`}>
        <PrevIcon className="" />
      </Link>
      <h2 className="text-[18px] font-bold">{children}</h2>
    </div>
  )
}

export default BackNavHeader
