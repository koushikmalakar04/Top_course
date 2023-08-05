import React from 'react';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

export default function Card({ course, liked, setLiked }) {
  function clickeHandler() {
    if (liked.includes(course.id)) {
      setLiked((prev) => prev.filter((cid) => cid !== course.id));
      toast.error('Like Removed');
    } else {
      if (liked.length === 0) {
        setLiked([course.id]);
      } else {
        setLiked((prev) => [...prev, course.id]);
      }
      toast.success('Liked Successfully');
    }
  }

  return (
    <div className="relative p-4 border rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-purple-600 text-white transition-transform transform hover:scale-105">
      {/* Use "bg-gray-800" to set a dark background */}
      <div className="mb-4 relative bg-gray-700 aspect-w-3 aspect-h-2 rounded-lg overflow-hidden brightness-150">
        {/* Use "bg-gray-700" to set a dark background for the image container */}
        {/* Use "brightness-110" class to increase the brightness of the image */}
        <img className="object-cover w-full h-full" src={course.image.url} alt={course.image.alt} />
        {/* Use "object-cover" to ensure the image covers the entire container */}
        <button
          className="absolute bottom-2 right-2 z-10 w-10 h-10 flex items-center justify-center bg-gray-600 rounded-full shadow-md transition-colors duration-300 hover:bg-red-500 hover:text-white"
          onClick={clickeHandler}
        >
          {/* Use "bg-gray-600" to set a dark background for the button */}
          {/* Use "z-10" class to place the button above the image */}
          {liked.includes(course.id) ? (
            <FcLike className="text-red-500 text-xl" />
          ) : (
            <FcLikePlaceholder className="text-gray-400 text-xl" />
          )}
          {/* Use different colors for the liked and unliked icons */}
        </button>
        <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
        {/* Use "absolute inset-0" class to create a full overlay */}
        {/* Use "bg-black opacity-40" classes to create a semi-transparent black background */}
        {/* Use "rounded-lg" class to match the rounded corners of the image */}
      </div>
      <div>
        <p className="text-lg font-bold">{course.title}</p>
        {/* Use "text-white" class to set white text color */}
        <p className="text-gray-300">{course.description}</p>
        {/* Use "text-gray-300" class to set a lighter gray color for description */}
      </div>
    </div>
  );
}
