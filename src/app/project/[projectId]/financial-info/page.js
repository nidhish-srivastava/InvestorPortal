import NavHeader from "@/components/Navbar/NavHeader";
import SampleProgram from '../../../../assets/SampleProject.png'
import Image from "next/image";
import Button from "@/components/Button";

function InvestmentDetails({ params }) {
  
  return (
    <div>
      <NavHeader route={`project/${params.projectId}`}>InvestmentDetails</NavHeader>
      <main className="flex flex-col mx-auto mt-8 w-[90%]">
        <div className=" bg-yellow-200 w-[180px] mx-auto">
          <Image src={SampleProgram} alt="" width={500} height={500} />
        </div>
        <h2 className="text-blue-500 text-[18px] font-medium">Project Name</h2>
        <div>
          <h3 className="mt-4 text-[14px] font-semibold text-blue-500 bg-opacity-70">Investment progress overview</h3>
          <p className="text-[10px] font-semibold">Project Details Project Details Project Details Project Details Project Details</p>
        </div>
        <div>
          <label htmlFor="" className="text-[12px] text-opacity-50">Project Leader name</label>
          <h3 className="text-[12px] font-semibold">Jit Banerjee</h3>
          <label htmlFor="" className="text-[12px] text-opacity-50">Project Starting time</label>
          <h3 className="text-[12px] font-semibold">15 Feb 2023</h3>
          <label htmlFor="" className="text-[12px] text-opacity-50">Expecting project end date</label>
          <h3 className="text-[12px] font-semibold">15 Feb 2024</h3>
          <label htmlFor="" className="text-[12px] text-opacity-50">Project Cost</label>
          <h3 className="text-[12px] font-semibold">&#8377; 200,000</h3>
        </div>
        <div className="mt-4 flex flex-col gap-2 text-[14px] font-semibold">
          <p>I am Jit Banerjee leader of this project
            I have Invested 50% in this project.
          </p>
            <span className="text-green-600">
              You can invest the remaining 50% in this project
            </span>
            <p>
            If you invest 50% for one year then you will get
            5% equity in this company and after completion
            of this project you will get 10% of your investment money.
          </p>
        </div>
      </main>
      <div className="text-center my-4">
      <Button className={`rounded-md`}>Invest Now</Button>
      </div>
    </div>

  )
}

export default InvestmentDetails