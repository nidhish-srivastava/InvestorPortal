import { signOut } from "firebase/auth"
import { auth } from "@/utils/firebase";


function Home() {
    const signoutHandler = async() =>{
        await signOut(auth)
        location.href = "/"
    }
  return (
    <div>
        
        <button onClick={signoutHandler}>Sign out</button>
    </div>
  )
}

export default Home