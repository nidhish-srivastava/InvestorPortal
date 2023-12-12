"use client"
import { onAuthStateChanged } from 'firebase/auth'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { auth } from '@/utils/firebase'
import Home from '@/components/Home'
export default function Page() {
  const [authUser,setAuthUser] = useState("")
  useEffect(()=>{
    const listen = () => {
      onAuthStateChanged(auth,(user)=>{
        setAuthUser(user?.email)
      })
    }
    listen()
  },[])

  return (
   <>
   {authUser?.length > 1 ? <Home/> : <>
   <Link href={`/login`}>Log In</Link>
   <Link href={`/signup`}>Create account</Link>

   </>}
   </>
  )
}
