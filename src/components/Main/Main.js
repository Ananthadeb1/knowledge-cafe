import React, { useEffect, useState } from "react";
import "./Main.css";
import Course from "../Course/Course";
import Bookmark from "../Bookmark/Bookmark";
let count =0;
let totalTime = 0;
let title = "";

const Main = () => {
  const [courses, setCourses] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  // const [time, setTime] = useState(0)ss

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  let newCart = [];
 
  useEffect(() => {
    setBookmark(newCart);
  }, []);
  // useEffect(() => {
  //   setTime(totalTime);
  // }, []);

  const handleAddTime = (course) =>{

    let newTime =0; 
    newTime =parseInt(course.time)
     totalTime = newTime + totalTime;
     const newCart = [...bookmark]
      setBookmark(newCart)
  }

  const handleAddItems = (course) => {
    count++;
    const newCart = [...bookmark, course];
    console.log(title)
    title =  title.concat(course.content_title + "\n");
    console.log((course.content_title))
    setBookmark(newCart);
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
                <Bookmark bookmark={bookmark}
                ></Bookmark>
            </div>
      <div >
                
            </div>

    </div>
  );
};

export default Main;
export {count}
export {totalTime}
export {title}
