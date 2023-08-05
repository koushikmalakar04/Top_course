import React from 'react';

export default function Spinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* Use "flex", "items-center", and "justify-center" classes to center the spinner */}
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-blue-900 h-16 w-16"></div>
      {/* Use custom classes to create the spinning loader */}
      <p className="ml-2 text-blue-900">Loading...</p>
      {/* Use "ml-2" class to add left margin between the loader and the text */}
      {/* Use "text-gray-700" class to set the text color to gray */}
    </div>
  );
}
