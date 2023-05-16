import React, { useEffect, useState } from "react";
import "./Main.css";
import Course from "../Course/Course";
import Bookmark from "../Bookmark/Bookmark";
import toast from 'react-hot-toast';

let count = 0;
let totalTime = 0;

const Main = () => {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleAddTime = (course) => {
    let newTime = 0;
    newTime = parseInt(course.time);
    totalTime = newTime + totalTime;
  };

  const handleAddItems = (course) => {
    count++;
    let exist=false;
    title.forEach(title => {
      if(title === course.content_title){
        console.log("added")
        toast('You Have Already Bookmarked This Blog!',
        {
          icon: '❌',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        }
      );
          exist=true;
      }
    });
    if(exist===false){
      const newTitle =[...title,course.content_title]
      setTitle(newTitle);
    }
    
  };
  return (
    <div className="main-container">
      <div className="courses-container">
        {courses.map((course) => (
          <Course
            key={course.id}
            course={course}
            handleAddItems={handleAddItems}
            handleAddTime={handleAddTime}
          ></Course>
        ))}
      </div>

      <div className="book-container">
        <Bookmark
         title={title}>
         </Bookmark>
      </div>
      <div></div>
    </div>
  );
};

export default Main;
export { count };
export { totalTime };
