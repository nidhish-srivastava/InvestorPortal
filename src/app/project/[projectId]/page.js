"use client"
// import PrevIcon from "@/components/PrevIcon"
import Link from "next/link"
import SampleProject from '../../../assets/SampleProject.png'
import Image from "next/image"
import NavHeader from "@/components/Navbar/NavHeader"
function page() {
    return (
        <>
            <NavHeader>Project Details</NavHeader>
            <div className="p-4 flex gap-2 mt-8 rounded-md">
                <Image
                    src={SampleProject}
                    width={90}
                    height={90}
                    alt=""
                />
                <div className="flex flex-col items-start gap-2">
                    <h2 className="text-[18px] text-violet-700 font-medium">Project Name</h2>
                    <h4 className="text-[13px] font-medium">Project leader name</h4>
                    <h4 className="text-[13px] font-medium">&#8377; 100,100 for 1 year</h4>
                </div>
            </div>
            <main className="w-[95%] mx-auto">
                <div>
                    <h3 className="text-[18px] font-medium text-violet-700 mb-2">Project Details</h3>
                    <p>In publishing and graphic design, Loremipsum
                        is a placeholder text commonly used to demo
                        nstrate the visual form of a document or a typ
                        eface without relying on meaningful content. L
                        orem ipsum may be used as a bc placeholder b
                        efore final copy is available.</p>
                </div>
                <br />
                <div>
                    <h3 className="text-[18px] font-medium text-violet-700 mb-2">Why Invest here</h3>
                    <p>In publishing and graphic design, Loremipsum
                        is a placeholder text commonly used to demo
                        nstrate the visual form of a document or a typ
                        eface without relying on meaningful content. L
                        orem ipsum may be used as a bc placeholder b
                        efore final copy is available.</p>
                </div>
                <div className="text-center">
                    <Link href={`Project Name/investment-details`}>
                        <button className="btn">Invest Now</button>
                    </Link>
                </div>
            </main>
        </>
    )
}

export default page