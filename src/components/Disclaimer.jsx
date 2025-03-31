import React, { useState } from "react";

const Disclaimer = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div
        className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 flex items-center justify-between animate-slide-up"
        style={{
          animationDuration: "0.5s",
        }}
      >
        <p className="text-sm">
          Disclaimer: Equiserve Group Limited is a holding company that invests
          in Investment Banking, Investment Management and Securities Trading
          firms in Africa. It does not provide services on its own.
        </p>
        <button
          onClick={handleClose}
          className="ml-4 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    )
  );
};

export default Disclaimer;
