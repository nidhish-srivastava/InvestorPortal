import { signOut } from "firebase/auth"
import { auth } from "@/utils/firebase";


function Home() {
    const signoutHandler = async() =>{
        await signOut(auth)
        location.href = "/"
    }
  return (
    <div>
        Home
        <button onClick={signoutHandler}>SIgn out</button>
    </div>
  )
}

export default Home