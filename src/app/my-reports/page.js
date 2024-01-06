"use client"
import Button from '@/components/Button';
import NavHeader from '@/components/Navbar/NavHeader';

function MyReports() {
  // Sample data, replace with your actual data
  const reports = [
    { projectName: 'Blogging App', reportId: 1 },
    // Add more reports as needed
  ];

  const downloadHandler = () =>{
    const pdfUrl = '/Report.pdf';

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Report.pdf'; // Specify the desired filename

    // Append the link to the document and trigger a click event
    document.body.appendChild(link);
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  }

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
              onDownload={downloadHandler} // Replace with actual download function
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MyReports;


import React from 'react';

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

