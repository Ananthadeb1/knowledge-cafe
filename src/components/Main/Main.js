import React, { useEffect, useState } from "react";
import "./Main.css";
import Course from "../Course/Course";
import Bookmark from "../Bookmark/Bookmark";
import toast from 'react-hot-toast';


let totalTime = 0;
let countNum = 0;

const Main = () => {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState([]);
  const [time, setTime]=useState(0);
  const [count, setCount]=useState(0);

  
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleAddTime = (course) => {
    let newTime = 0;
    
    newTime = parseInt(course.time);
     totalTime = totalTime + newTime;
    setTime(totalTime);
  };

  const handleAddItems = (course) => {
    
    let exist=false;
    title.forEach(title => {
      if(title === course.content_title){
        
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
      countNum = countNum +1;
      setCount(countNum)
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
         title={title}
         time ={time}
         count={count}>
         </Bookmark>
      </div>
      <div></div>
    </div>
  );
};

export default Main;
