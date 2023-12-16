"use client"
import { onAuthStateChanged } from 'firebase/auth'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { auth } from '@/utils/firebase'
import Home from '@/components/Home'
export default function Page() {
  const [authUser, setAuthUser] = useState("")
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const listen = () => onAuthStateChanged(auth, (user) => {
      setAuthUser(user?.email)
      setLoading(false)
    })
    listen()
  }, [])

  if (loading) {
    return <></>;
  }

  return (
    <>
      {authUser?.length > 1 ? <Home /> : <>
        <div className='flex flex-col justify-center h-screen items-center gap-4'>
          <Link href={`/login`}>
            <button className='btn'>
              Log In
            </button>
          </Link>
          <Link href={`/signup`}>
            <button className='btn'>
              Create account
            </button>
          </Link>
        </div>
      </>}
    </>
  )
}
