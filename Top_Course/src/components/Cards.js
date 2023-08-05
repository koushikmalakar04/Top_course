import React, { useState } from 'react';
import Card from './Card';

export default function Cards(props) {
  const courses = props.courses;
  const filter = props.filter;

  const [liked, setLiked] = useState([]);

  function getCourses() {
    if (filter === 'All') {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else if (filter === 'Liked Course') {
      let likedCourse = [];
      Object.values(courses).forEach((courseCatagory) => {
        courseCatagory.forEach((course) => {
          for (let i = 0; i < liked.length; i++) {
            if (course.id === liked[i]) {
              likedCourse.push(course);
            }
          }
        });
      });
      return likedCourse;
    } else {
      return courses[filter];
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {getCourses().map((course) => (
        <Card key={course.id} course={course} liked={liked} setLiked={setLiked} />
      ))}
    </div>
  );
}
