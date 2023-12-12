"use client";
import Image from "next/image";
import signupPage from "../../assets/signupPage.png";
import { useEffect, useState } from "react";
import ShowPassSvg from "@/components/ShowPassSvg";
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
import { auth } from "@/utils/firebase";

function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [value, setValue] = useState(0)
    const [users, setUsers] = useState([])
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [signupDetails, setSignUpDetails] = useState({
        fullName: "",
        phoneNumber: 0,
    })
    const usersCollectionRef = collection(db, "users");
    // console.log(db);
    const changeHandler = (e) => {
        setSignUpDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const submitHandler = async (e) => {
        e.preventDefault()
        try {
                if(confirmPassword==password){
                const response = await createUserWithEmailAndPassword(auth, email, password)
                const userId = response?.user?.uid
                if(userId?.length>1){
                    try {
                        await addDoc(usersCollectionRef,{signupDetails,uid : userId})
                    } catch (error) {
                        alert(error)
                    }
                }
        } 
        else{
            alert("Password not matching")
        }
    }
        catch (error) {
            alert("Error")
        }
}
    // }
    //   useEffect(()=>{
    //     const getUsers = async()=>{
    //         const data = await getDocs(usersCollectionRef)
    //         console.log(data);
    //         setUsers(data.docs.map((doc)=>({...doc.data(),id : doc.id})))
    //     }
    //     getUsers()
    //   },[])

    return (
        <>
            {/* {users.map(e=>(
        <div>
            {e.fullName}
        </div>
    ))} */}
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
                {/* <button onClick={submitHandler}>asd</button> */}
                <form onSubmit={submitHandler}>
                    <div className="flex flex-col">
                        <input autoFocus={true} required type="text" name="fullName" placeholder="Full name" value={signupDetails.fullName} onChange={changeHandler} />
                        <input required type="email" name="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} />
                        <input required type="tel" name="phoneNumber" placeholder="Phone number" value={signupDetails.phoneNumber !== 0 ? signupDetails.phoneNumber : ''} onChange={changeHandler}
                        />
                        <div className="relative">
                            <input
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
                        <button>Create account</button>
                </form>
                        <Link href={`/login`}>
                            <span>Already have an account?</span>
                        </Link>
            </main>
        </>
    );
}

export default SignUp
