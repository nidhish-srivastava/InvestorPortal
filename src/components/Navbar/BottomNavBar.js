import React from 'react'
import Link from 'next/link'
import HomeIconSvg from '../Icons/HomeIconSvg'
import ActivityIconSvg from '../Icons/ActivityIconSvg'
import WalletIconSvg from '../Icons/WalletIconSvg'
import { useRouter } from 'next/navigation'

function BottomNavBar() {
  const router= useRouter()
  return (
    <div className="fixed bottom-0 p-5 w-[100%] flex justify-between items-center rounded-tl-lg rounded-tr-lg bg-blue-700 shadow-md">
    <Link href={`/projects`}>
   <HomeIconSvg/>
    </Link>
    <Link href={`/upcoming-projects`}>
   <ActivityIconSvg/>
    </Link>
    <Link href={`/portfolio`}>
   <WalletIconSvg/>
    </Link>
  </div>
  )
}

export default BottomNavBar