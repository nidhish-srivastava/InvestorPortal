"use client";
import Link from "next/link";
import { useState } from "react";
import loginPageHero from "../../assets/loginPage.png";
import Image from "next/image";
import ShowPassSvg from "@/components/ShowPassSvg";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { useRouter } from "next/navigation";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter()
    const loginHandler = async(e)=>{
        e.preventDefault()
    try {
        const response = await signInWithEmailAndPassword(auth,email,password)
        if(response.user.email.length > 1){
          router.push("/")
        }
    } catch (error) {
        
    }
  }
  return (
    <main className="flex flex-col items-center">
      <div className="flex items-center">
        <h1>Login</h1>
        <div>
          <Image src={loginPageHero} width={100} height={100} alt="hero" />
        </div>
      </div>

<form onSubmit={loginHandler}>
        <input
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email address"
        />
        <div className="relative">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
          />
          <span
            className="absolute right-0"
            onClick={() => setShowPassword((prev) => !prev)}
          >
     <ShowPassSvg/>
          </span>
        </div>
        <button>Log In</button>
      </form>
        <Link href={`/signup`}>
          <span>I don't have an account</span>
        </Link>
    </main>
  );
}

export default Login;
