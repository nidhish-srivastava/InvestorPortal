"use client";
import Link from "next/link";
import { useState } from "react";
import loginPageHero from "../../assets/loginPage.png";
import Image from "next/image";
import ShowPassSvg from "@/components/Icons/ShowPasswordSvg";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import toast, {  Toaster } from "react-hot-toast";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()
  const loginHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      if (response.user.email.length > 1) {
        router.push("/")
      }
    } catch (error) {
      toast.error("Login Failed !!!")
    }
  }
  return (
    <>
      <Toaster toastOptions={{duration : 3000}}/>
    <main className="flex flex-col items-center h-screen pb-12">
      <div className="flex items-center gap-8">
        <h1 className="text-indigo-700 text-center text-[25px] not-italic font-bold">Login</h1>
        <div>
          <Image src={loginPageHero} width={185} height={185} alt="hero" />
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-12 w-[90%]">
        <input
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email address"
        />
        <div className="relative border overflow-hidden rounded-xl">
          <input
          className="border-none outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            required
          />
          <span
            className="absolute top-4 right-0"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            <ShowPassSvg />
          </span>
        </div>
      </div>
      <div className="text-center mt-auto">
        <button onClick={loginHandler} className="btn">Log In</button>
        <br />
      <Link href={`/signup`}>
        <span className="text-indigo-700 text-center text-sm not-italic font-normal"> I don't have an account</span>
      </Link>
      </div>
    </main>
    </>
  );
}

export default Login;
