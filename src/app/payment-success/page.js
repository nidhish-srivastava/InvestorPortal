import React from 'react';

function PaymentSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-green-500">Payment Successful</h2>
        <p className="text-gray-700 mb-4">Company will contact you shortly</p>
        <p className="text-gray-700 mb-4">A confirmation mail is sent to your email</p>
      </div>
    </div>
  );
}

export default PaymentSuccessPage;
