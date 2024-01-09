"use client"
import Link from "next/link"
import SampleProject from '../../../assets/SampleProject.png'
import Image from "next/image"
import BackNavHeader from "@/components/Navbar/BackNavHeader"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/utils/firebase";
import Button from "@/components/Button"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import RupeeIcon from "@/components/Icons/RupeeIcon"
import { pdfDownloadHandler, sumHandler } from "@/utils"

function Page() {
    const [obj, setObj] = useState({})
    const param = useParams()
    const projectDocRef = doc(db, `projects/${param.projectId}`)
    const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false);

  
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

    // const downloadTechnicalPdf = () =>{
    //     const pdfUrl = '/Technical_Document.pdf';

    //     // Create a temporary link element
    //     const link = document.createElement('a');
    //     link.href = pdfUrl;
    //     link.download = 'Technical_Document.pdf'; // Specify the desired filename
    
    //     // Append the link to the document and trigger a click event
    //     document.body.appendChild(link);
    //     link.click();
    
    //     // Remove the link from the document
    //     document.body.removeChild(link);
    // }

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
  
    let investmentRequired = obj?.cost - investmentRaised
    let projectName = obj?.name
    let phoneNumber = obj?.phoneNumber
  
    useEffect(() => {
      sessionStorage.setItem("investmentRequired", JSON.stringify({investmentRequired, maxInvestorsRequired, projectName,phoneNumber}))
    }, [obj])



    return (
        <>
            <BackNavHeader>Project Details</BackNavHeader>
            {
                loading ? <div style={{ width: "80%", margin: "4rem auto" }}>
                    <Skeleton count={5} />
                </div> : <main>
                    <section className="p-4 flex gap-2 mt-8 rounded-md items-center justify-center">
                        <Image
                            src={SampleProject}
                            width={100}
                            height={100}
                            alt=""
                        />
                        <div className="flex flex-col items-start gap-2 p-2">
                            <h2 className="text-[18px] text-violet-700 font-medium">{obj?.name}</h2>
                            <section className="flex justify-center items-center gap-6 mb-4">
                                <div className="text-center">
                                    <label htmlFor="" className="text-[13px] text-opacity-50">Leader name</label>
                                    <h3 className="text-[15px] font-semibold">{obj?.leader}</h3>
                                </div>
                                <div className="text-center">
                                    <label htmlFor="" className="text-[13px] text-opacity-50">Cost</label>
                                    <h3 className="text-[15px] font-semibold"><RupeeIcon/> {obj?.cost}</h3>
                                </div>
                            </section>
                        </div>
                    </section>
                    <section className="flex justify-center items-center gap-4 mb-4">
                        <div className="text-center">
                            <label htmlFor="" className="text-[13px] text-opacity-50">Project Starting Date</label>
                            <h3 className="text-[15px] font-semibold">{obj?.startingDate}</h3>
                        </div>
                        <div className="text-center">
                            <label htmlFor="" className="text-[13px] text-opacity-50">Expected Project Ending Date</label>
                            <h3 className="text-[15px] font-semibold">{obj?.endingDate}</h3>
                        </div>
                    </section>
                    <section className="w-[95%] mx-auto">
                        <div>
                            <h3 className="text-[18px] font-medium text-violet-700 mb-2">Project Details</h3>
                            <p className="w-full">{obj?.description}</p>
                        </div>
                        <br />
                        <div>
                            <h3 className="text-[18px] font-medium text-violet-700 mb-2">Why Invest here</h3>
                            <p>{obj?.investmentReason}</p>
                        </div>
                        {/* <div className=" flex gap-4 justify-center mt-4 mb-4">
                                <Button onClick={downloadTechnicalPdf}  className={`text-[.94rem]`}>Technical Document</Button>
                            <Link href={`${obj?.id}/financial-info`}>
                                <Button className={`text-[.94rem]`}>Financial Document</Button>
                            </Link>
                        </div> */}
                         {/*
                        <div className="text-center mt-4 mb-4">
                          <Link href={`${obj?.id}/financial-info`} className="">
                                <Button className={`text-[.94rem]`}>Continue</Button>
                            </Link> 
                        </div>
                            */}
                    </section>
      {/* <NavHeader route={`project/${param.projectId}`}>InvestmentDetails</NavHeader> */}
          {/* <section className="flex flex-col mx-auto mt-8 w-[90%]"> */}
            {/* <div className=" bg-yellow-200 w-[180px] mx-auto">
              <Image src={SampleProgram} alt="" width={500} height={500} />
            </div> */}
            {/* <div className="mt-2 p-1">
              <h2 className="text-blue-500 mb-1 text-[18px] font-medium">{obj?.name}</h2>
              <h3><b>Project Cost - <RupeeIcon /> {obj?.cost}</b>
              </h3>
            </div> */}
          {/* </section> */}
          <h3 className="text-[18px] mt-12 pl-4 font-semibold text-blue-500 bg-opacity-70 text-center">Investment progress overview</h3>
          <section className="grid grid-cols-2 justify-center items-center gap-6 mt-4 mb-4 w-[90%] mx-auto">
            <div className="text-center">
              <label htmlFor="" className="text-[13px] text-opacity-50">Investment Required</label>
              <h3 className="text-[15px] font-semibold"><RupeeIcon /> {investmentRequired}</h3>
            </div>
            <div className="text-center">
              <label htmlFor="" className="text-[13px] text-opacity-50">Investment Raised</label>
              <h3 className="text-[15px] font-semibold"><RupeeIcon /> {investmentRaised}</h3>
            </div>
            <div className="text-center">
              <label htmlFor="" className="text-[13px] text-opacity-50">Current Number of Investors</label>
              <h3 className="text-[15px] font-semibold"> {currentInvestors}</h3>
            </div>
            <div className="text-center">
              <label htmlFor="" className="text-[13px] text-opacity-50">Remaining Limit of Investors</label>
              <h3 className="text-[15px] font-semibold">{maxInvestorsRequired}</h3>
            </div>
            <div className="text-center">
              <label htmlFor="" className="text-[13px] text-opacity-50">Max investors</label>
              <h3 className="text-[15px] font-semibold">5</h3>
            </div>
            <div className="text-center">
              <label htmlFor="" className="text-[13px] text-opacity-50">Phone Number</label>
              <h3 className="text-[15px] font-semibold">{phoneNumber}</h3>
            </div>
          </section>
          <div className="text-center my-8">
            <div className="flex w-[100%] justify-center pb-12">
          <Button overrideClassNames class="bg-blue-500 text-white text-sm p-2 rounded-md mx-2 hover:bg-blue-600" onclick="handleTechnicalDocumentClick" onClick={()=>pdfDownloadHandler("Technical_Document")}>Technical Document</Button>
  <Button overrideClassNames class="bg-blue-500 text-white text-sm p-2 rounded-md mx-2 hover:bg-blue-600" onclick="handleFinancialDocumentClick" onClick={()=>pdfDownloadHandler("Financial_Document")}>Financial Document</Button>
            </div>
            <Button className={`rounded-md`} onClick={openModal}>Submit Investment Interest</Button>
          </div>
      <Disclaimer projectId = {param?.projectId} showModal={showModal} closeModal={closeModal} />
                </main>
}
        </>
    )
}

export default Page




const Disclaimer = ({ showModal, closeModal,projectId }) => {
    const [agreed, setAgreed] = useState(false);
  
    const handleAgreement = () => {
      if (agreed) {
        // Perform the action to proceed with the investment
        alert("Thank you for agreeing. Proceeding with the process...");
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
                <Link href={`${projectId}/invest`}>
                  <Button
                    className={`p-2 mt-4 ${agreed ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                    onClick={handleAgreement}
                    disabled={!agreed}
                  >
                    Continue
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  
  