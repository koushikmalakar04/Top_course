import NavBar from './components/NavBar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';

import { filterData, apiUrl } from "./Data"

import './App.css';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
      toast.success("API Called Successfully");
    } catch (error) {
      toast.error("Something is wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 to-purple-700">
      {/* Use "min-h-screen" class to ensure the content covers at least the full height of the screen */}
      <div className="container mx-auto px-4 py-8">
        {/* Use "container", "mx-auto", "px-4", and "py-8" classes for horizontal padding and centering */}
        <NavBar />
        <div className="my-4">
          <Filter filterData={filterData} filter={filter} setFilter={setFilter} />
        </div>
        <div className="my-4">
          {loading ? (<Spinner />) : (<Cards courses={courses} filter={filter} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
