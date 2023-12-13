"use client";
import Image from "next/image";
import signupPage from "../../assets/signupPage.png";
import { useEffect, useState } from "react";
import ShowPassSvg from "@/components/ShowPassSvg";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Link from "next/link";
import { db } from "@/utils/firebase";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import OTP from "@/components/OTP";
import { auth } from "@/utils/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Aadhaar from "@/components/Aadhar";
import PanNumber from "@/components/PanNumber";
import Occupation from "@/components/Occupation";
import Income from "@/components/Income";
import BankDetails from "@/components/BankDetails";
import AccountSuccessModal from "@/components/AccountSuccessModal";


function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [value, setValue] = useState(60)
    // const [users, setUsers] = useState([])
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [result, setResult] = useState("");
    const [fullName,setFullName] = useState("")


    const usersCollectionRef = collection(db, "users");
    // console.log(db);
    

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            if (confirmPassword == password) {
                const response = await createUserWithEmailAndPassword(auth, email, password)
                const userId = response?.user?.uid
                if (userId?.length > 1) {
                    try {
                        await addDoc(usersCollectionRef, { fullName,number, uid: userId })
                        setValue(10)
                    } catch (error) {
                        alert(error)
                    }
                }
            }
            else {
                alert("Password not matching")
            }
        }
        catch (error) {
            alert("Error")
        }
    }

    //   useEffect(()=>{
    //     const getUsers = async()=>{
    //         const data = await getDocs(usersCollectionRef)
    //         console.log(data);
    //         setUsers(data.docs.map((doc)=>({...doc.data(),id : doc.id})))
    //     }
    //     getUsers()
    //   },[])

    const sendOTP = async () => {
        try {
            const recaptch = new RecaptchaVerifier(auth, "recaptch", {})
            const confirmation = await signInWithPhoneNumber(auth, number, recaptch)
            console.log(confirmation);
            setResult(confirmation)
            setValue(10)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {value == 0 ?
                <main className="flex flex-col items-center">
                    <div className="flex items-center">
                        <div>
                            <h2>Create an Account</h2>
                            <h4>Invest and grow your savings</h4>
                        </div>
                        <div>
                            <Image src={signupPage} width={100} height={100} alt="signup-hero" />
                        </div>
                    </div>
                    <form>
                        {/* <form onSubmit={submitHandler}> */}
                        <div className="flex flex-col">
                            <input autoFocus={true} required type="text" name="fullName" placeholder="Full name" value={fullName} onChange={e=>setFullName(e.target.value)} />
                            <input required type="email" name="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} />
                            <PhoneInput 
                            defaultCountry="IN" value={number} onChange={setNumber} placeholder="Enter Phone Number" />
                            <div className="relative">
                                <input
                                className="border-none"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Password"
                                    value={password}
                                    minLength={6}
                                    onChange={e => setPassword(e.target.value)}
                                    required
                                />
                                <span
                                    className="absolute right-0"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    <ShowPassSvg />
                                </span>
                            </div>
                            <div className="relative">
                                <input
                                className="border-none"
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={e => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm Password"
                                />
                                <span
                                    className="absolute right-0"
                                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                                >
                                    <ShowPassSvg />
                                </span>
                            </div>
                        </div>
                        <button type="button" onClick={() => sendOTP()}>Create account</button>
                    </form>
                    <Link href={`/login`}>
                        <span>Already have an account?</span>
                    </Link>
                </main>
                : null}
            {
                value == 10 ?
                    <OTP setValue={setValue} result={result} number={number} /> : null
            }
            {
                value == 20 ? <Aadhaar setValue={setValue} /> : null
            }
            {
                value == 30 ? <PanNumber setValue={setValue} /> : null
            }
            {
                value == 40 ? <Occupation setValue={setValue} /> : null
            }
            {
                value == 50 ? <Income setValue={setValue} /> : null
            }
            {
                value == 60 ? <BankDetails setValue={setValue} /> : null
            }
            {
                value == 70 ? <AccountSuccessModal />: null
            }
        </>
    );
}

export default SignUp
