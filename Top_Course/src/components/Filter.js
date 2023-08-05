import React from 'react';

export default function Filter(props) {
  const filterData = props.filterData;
  const filter = props.filter;
  const setFilter = props.setFilter;

  function filterHandler(title) {
    setFilter(title);
  }

  return (
    <div className="flex justify-center">
      {/* Use "flex" and "justify-center" classes to center the buttons horizontally */}
      {filterData.map((data) => (
        <button
          onClick={() => filterHandler(data.title)}
          key={data.id}
          className={`px-4 py-2 rounded-full focus:outline-none ${
            filter === data.title
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
              : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
          }`}
        >
          {/* Use "focus:outline-none" class to remove focus outline on button click */}
          {data.title}
        </button>
      ))}
    </div>
  );
}
