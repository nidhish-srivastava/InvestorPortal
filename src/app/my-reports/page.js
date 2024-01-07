"use client"
import NavHeader from '@/components/Navbar/NavHeader';
import { pdfDownloadHandler } from '@/utils';

function MyReports() {
  // Sample data, replace with your actual data
  const reports = [
    { projectName: 'Blogging App', reportId: 1 },
    // Add more reports as needed
  ];

  return (
    <>
      <NavHeader />
      <div className="mt-8">
        <h2 className="text-center font-semibold text-xl">My Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {reports.map((report) => (
            <ReportCard
              key={report.reportId}
              projectName={report.projectName}
              onDownload={()=>pdfDownloadHandler("Report")} // Replace with actual download function
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MyReports;


function ReportCard({ projectName, onDownload }) {
  return (
    <div className="bg-white border shadow-lg mt-5 w-[95%] mx-auto p-6 rounded-lg flex flex-col items-start gap-6">
      <h3 className="text-xl font-semibold">{projectName}</h3>
      <button
        onClick={onDownload}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 focus:outline-none focus:ring focus:border-blue-300"
      >
        Download Report
      </button>
    </div>
  );
}

