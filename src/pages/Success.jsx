import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div className="flex flex-col justify-center items-center h-screen">
          <h2 className="text-3xl font-semibold mb-4">Order Successful!</h2>
          <p className="text-xl">Your ordee has been successfully placed.</p>
        </div>
      )}
    </div>
  );
};

export default Success;
