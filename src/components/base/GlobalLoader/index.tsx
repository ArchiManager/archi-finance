// GlobalLoader.js
import React from "react";

const GlobalLoader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
      <div className="animate-spin border-t-4 border-blue-500 border-solid rounded-full h-12 w-12"></div>
    </div>
  );
};

export default GlobalLoader;
