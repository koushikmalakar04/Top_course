import React from 'react';

export default function NavBar() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600">
      {/* Use "bg-blue-900" class to set the dark background color of the navigation bar to blue */}
      <nav className="container mx-auto px-4 py-2 flex items-center justify-center">
        {/* Use "container", "mx-auto", "px-4", and "py-2" classes for horizontal padding and centering */}
        {/* Use "flex", "items-center", and "justify-center" classes to center the content horizontally */}
        <h1 className="text-white text-3xl font-bold">Top Courses</h1>
        {/* Use "text-white" class to set the text color to white */}
        {/* Use "text-3xl" class for larger font size */}
        {/* Use "font-bold" class for bold font weight */}
      </nav>
    </div>
  );
}
