import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="w-16 h-16 border-4 border-red-600 border-dotted rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
