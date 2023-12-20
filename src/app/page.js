"use client"
import { onAuthStateChanged } from 'firebase/auth'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { auth } from '@/utils/firebase'
import Home from '@/components/Home'
import Button from '@/components/Button'
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

  // If a refresh happens if the user has logged in,then at that moment,login and signupbtn get displayed,which is not a good UX
  if (loading) {
    return <></>;
  }

  return (
    <>
      {authUser?.length > 1 ? <Home /> : <>
        <div className='flex flex-col justify-center h-screen items-center gap-4'>
          <Link href={`/login`}>
            <Button className='w-[332px]'>
              Log In
            </Button>
          </Link>
          <Link href={`/signup`}>
            <Button className={`w-[332px]`}>
              Create account
            </Button>
          </Link>
        </div>
      </>}
    </>
  )
}
