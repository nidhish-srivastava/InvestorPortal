import React from 'react'
import Link from 'next/link'
import HomeIconSvg from '../Icons/HomeIconSvg'
import ActivityIconSvg from '../Icons/ActivityIconSvg'
import WalletIconSvg from '../Icons/WalletIconSvg'

function BottomNavBar() {
  return (
    <div className="fixed bottom-0 p-5 w-[100%] flex justify-between items-center rounded-tl-lg rounded-tr-lg bg-blue-700 shadow-md">
    <Link href={`/`}>
   <HomeIconSvg/>
    </Link>
    {/* <Link href={`/trending-projects`}> */}
    <Link href={`/projects`}>
   <ActivityIconSvg/>
    </Link>
    <Link href={`/my-investments`}>
   <WalletIconSvg/>
    </Link>
  </div>
  )
}

export default BottomNavBar