"use client"
import NavHeader from "@/components/Navbar/NavHeader";
import SampleProgram from '../../../../assets/SampleProject.png'
import Image from "next/image";
import Button from "@/components/Button";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useState, useEffect } from "react";
import { db } from "@/utils/firebase";
import { doc, getDoc } from "firebase/firestore";
import { sumHandler } from "@/utils";
import RupeeIcon from "@/components/Icons/RupeeIcon";
import Link from "next/link";


function InvestmentDetails({ params }) {
  const [loading, setLoading] = useState(false)
  const projectDocRef = doc(db, `projects/${params.projectId}`)
  const [obj, setObj] = useState({})
  const [showModal, setShowModal] = useState(false);


  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true)
      try {
        const docSnapshot = await getDoc(projectDocRef)
        if (docSnapshot.exists()) {
          const docData = docSnapshot.data();
          const id = docSnapshot.id
          setObj({ ...docData, id })
          setLoading(false)
        }
      } catch (error) {
        setLoading(false)
      }
    }
    fetchDetails()
  }, [])

  let currentInvestors = obj?.investmentProgress?.length
  let maxInvestorsRequired = 5 - currentInvestors
  let investmentRaised = sumHandler(obj?.investmentProgress)

  return (
    <>
      <NavHeader route={`project/${params.projectId}`}>InvestmentDetails</NavHeader>
      {loading ? <div style={{ width: "80%", margin: "4rem auto" }}>
        <Skeleton count={5} />
      </div> :
        <>
          <main className="flex flex-col mx-auto mt-8 w-[90%]">
            <div className=" bg-yellow-200 w-[180px] mx-auto">
              <Image src={SampleProgram} alt="" width={500} height={500} />
            </div>
            <h2 className="text-blue-500 text-[18px] font-medium">{obj?.name}</h2>
            <h3><b>Project Cost - <RupeeIcon /> {obj?.cost}</b>
            </h3>
            <div className="">
              <h3 className="mt-4 text-[14px] font-semibold text-blue-500 bg-opacity-70">Investment progress overview</h3>
              <b>Investment Required : <RupeeIcon /> {obj?.cost - investmentRaised}</b>
              <h2>Investment Raised <RupeeIcon /> {investmentRaised}</h2>
              <h2>Current Number of Investors  : {currentInvestors}</h2>
              <h3>We can get a max of <b>5</b> investors</h3>
              <h4>Remaining Limit of Investors : {maxInvestorsRequired}</h4>
            </div>
          </main>
          <div className="text-center my-4">
            <Button className={`rounded-md`} onClick={openModal} >Invest Now</Button>
          </div>
        </>
      }
      <Disclaimer showModal={showModal} closeModal={closeModal} />
    </>

  )
}

export default InvestmentDetails


const Disclaimer = ({ showModal, closeModal}) => {
  const [agreed, setAgreed] = useState(false);

  const handleAgreement = () => {
    if (agreed) {
      // Perform the action to proceed with the investment
      alert("Thank you for agreeing. Proceeding with the investment...");
    } else {
      alert("Please read and agree to the disclaimer before proceeding.");
    }
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-black opacity-50 fixed inset-0"></div>
          <div className="bg-white p-6 rounded-md z-10 w-[90%] relative">
            <span className="absolute right-2 top-1 cursor-pointer" onClick={closeModal}><b>x</b></span>
            <p className="mb-4">
              <strong>Disclaimer:</strong> Investing involves risks, and past performance does not guarantee future results.
              Please carefully consider your investment objectives, risk tolerance, and the potential benefits before deciding to invest.Always conduct your own research
              and consult with a qualified financial advisor before making investment decisions. <br /> <br /> By clicking 'I Agree and Continue,'
              you acknowledge that you have read and understood this disclaimer and are proceeding at your own risk.
            </p>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agreeCheckbox"
                className="mr-2"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
              />
              <label htmlFor="agreeCheckbox" className="text-gray-700">
                I Agree and Continue
              </label>
            </div>
            <div className="text-center">
              <Link href={`financial-info/investment-process`}>
              <Button
                className={`p-2 mt-4 ${agreed ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                onClick={handleAgreement}
                disabled={!agreed}
                >
                Invest Now
              </Button>
                </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

