"use client";
import Image from "next/image";
import signupPage from "../../assets/signupPage.png";
import { useEffect, useState } from "react";
import ShowPassSvg from "@/components/Icons/ShowPasswordSvg";
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
import OTP from "@/components/ProfileCreation/OTP";
import { auth } from "@/utils/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import Aadhaar from "@/components/ProfileCreation/Aadhar";
import PanNumber from "@/components/ProfileCreation/PanNumber";
import Occupation from "@/components/ProfileCreation/Occupation";
import Income from "@/components/ProfileCreation/Income";
import BankDetails from "@/components/ProfileCreation/BankDetails";
import AccountSuccessModal from "@/components/ProfileCreation/AccountSuccessModal";


function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [value, setValue] = useState(0)
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [result, setResult] = useState("");
    const [fullName, setFullName] = useState("")
    const [aadharInput, setAadharInput] = useState("")
    const [panNumber, setPanNumber] = useState("")
    const [occupation, setOccupation] = useState("")
    const [income, setIncome] = useState("")
  const [show,setShow] = useState(false)


    const [bankDetails, setBankDetails] = useState({
        fullName: "",
        bankName: "",
        branchName: "",
        ifscCode: "",
        accountNumber: "",
        address: ""
    })


    const usersCollectionRef = collection(db, "users");


    const submitHandler = async (e) => {
        e.preventDefault()
        try {
                const response = await createUserWithEmailAndPassword(auth, email, password)
                const userId = response?.user?.uid
                if (userId?.length > 1) {
                    try {
                        await addDoc(usersCollectionRef, { fullName, number, uid: userId, bankDetails, aadharInput, panNumber, occupation, income })
                        setValue(70)
                    } catch (error) {
                        alert(error)
                    }
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
            if (confirmPassword == password) {
                const recaptch = new RecaptchaVerifier(auth, "recaptch", {})
                const confirmation = await signInWithPhoneNumber(auth, number, recaptch)
                console.log(confirmation);
                setShow(true)
                setResult(confirmation)
                setValue(10)
            }
            else {
                alert("Password not matching")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            {value == 0 ?
                <main className="flex flex-col items-center h-screen pb-12">
                    <div className="flex items-center">
                        <div className="w-[100%]">
                            <h1 className="text-indigo-700 text-center text-[22px] not-italic font-bold">Create an account</h1>
                            <h4 className="text-center text-[12px]">Invest and grow your savings</h4>
                        </div>
                        <div>
                            <Image src={signupPage} width={178} height={201} alt="signup-hero" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 mb-4 w-[90%]">
                        <input autoFocus={true} required type="text" name="fullName" placeholder="Full name" value={fullName} onChange={e => setFullName(e.target.value)} />
                        <input required type="email" name="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} />
                        <PhoneInput
                            defaultCountry="IN" value={number} onChange={setNumber} placeholder="Enter Phone Number" />
      <div id="recaptch"></div>
                        {/* <input type="tel" value={number} placeholder="Phone Number (+91)" onChange={e => setNumber(e.target.value)} /> */}
                        <div className="relative border overflow-hidden rounded-xl">
                            <input
                                className="border-none outline-none"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                minLength={6}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                            <span
                                className="absolute right-0 top-3"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                <ShowPassSvg />
                            </span>
                        </div>
                        <div className="relative border overflow-hidden rounded-xl">
                            <input
                                className="border-none outline-none"
                                type={showConfirmPassword ? "text" : "password"}
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                placeholder="Confirm Password"
                            />
                            <span
                                className="absolute right-0 top-3"
                                onClick={() => setShowConfirmPassword((prev) => !prev)}
                            >
                                <ShowPassSvg />
                            </span>
                        </div>
                    </div>
                    <div className="text-center mt-auto">
                        <button className="btn" type="button" onClick={sendOTP}>Create account</button>
                        <br />
                        <Link href={`/login`}>
                            <span className="text-indigo-700 text-center text-sm not-italic font-normal">
                                Already have an account?
                            </span>
                        </Link>
                    </div>
                </main>
                : null}
            {
                value == 10 ?
                    <OTP show = {show} sendOTP={sendOTP} setValue={setValue} result={result} number={number} /> : null
            }
            {
                value == 20 ? <Aadhaar aadharInput={aadharInput} setAadharInput={setAadharInput} setValue={setValue} /> : null
            }
            {
                value == 30 ? <PanNumber panNumber={panNumber} setPanNumber={setPanNumber} setValue={setValue} /> : null
            }
            {
                value == 40 ? <Occupation setOccupation={setOccupation} setValue={setValue} /> : null
            }
            {
                value == 50 ? <Income setIncome={setIncome} setValue={setValue} /> : null
            }
            {
                value == 60 ? <BankDetails bankDetails={bankDetails} setBankDetails={setBankDetails} setValue={setValue} submitHandler={submitHandler} /> : null
            }
            {
                value == 70 ? <AccountSuccessModal /> : null
            }
        </>
    );
}

export default SignUp
