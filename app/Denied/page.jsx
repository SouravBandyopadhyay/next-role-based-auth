import React from "react";
import Link from "next/link";

const Denied = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-red-600 mb-4">
          Access Denied
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          You don't have permission to access this page.
        </p>
        <Link href="/" className="text-blue-600 hover:underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default Denied;
