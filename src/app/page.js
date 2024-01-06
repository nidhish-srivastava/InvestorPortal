"use client"
import { onAuthStateChanged } from 'firebase/auth'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { auth, db } from '@/utils/firebase'
import Home from '@/components/Home'
import Button from '@/components/Button'
import { collection, getDocs, query, where } from 'firebase/firestore'
import HeroSection from '@/components/HeroSection'

export default function Page() {
  const [authUser,setAuthUser] = useState("")
  const [loading, setLoading] = useState(true)
  const usersCollectionRef = collection(db, "users")
  const [show,setShow] = useState(false)

  useEffect(() => {
    const listen = () => onAuthStateChanged(auth, (user) => {
      setAuthUser(user?.email)
      setLoading(false)
    })
    listen()
  }, [])

  useEffect(()=>{
    const fetchInvestorDetails = async(email)=>{
       if(authUser?.length>1){
        const userQuery = query(usersCollectionRef, where("email", "==", email));
          const querySnapshot = await getDocs(userQuery);
          if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0].data();
            const phoneNumber = userDoc.number
            const fullName = userDoc.fullName
            const docId = querySnapshot.docs[0].id
            localStorage.setItem("investorDetails",JSON.stringify({phoneNumber,fullName,docId,authUser}))
          }
       }
    }
    fetchInvestorDetails(authUser)
  },[authUser])

  // If a refresh happens if the user has logged in,then at that moment,login and signupbtn get displayed,which is not a good UX
  if (loading) {
    return <></>;
  }

  return (
    <>
      {authUser?.length>1 ? <Home /> : 
      <>
      {
        show ? 
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
        : 
      <HeroSection setShow={setShow}/>
      }
      </>
}
    </>
  )
}
