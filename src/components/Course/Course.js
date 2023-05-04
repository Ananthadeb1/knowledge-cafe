import React from "react";
import "./Course.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Course = (props) => {
    const {
        content_title,
        content_banner,
        author_name,
        author_profile,
        course_type,
        time,
    } = props.course;
    const handleAddItems = props.handleAddItems;
    const handleAddTime = props.handleAddTime;

    return (
        <div className="course">
            <img className="banner-img" src={content_banner} alt="" />
            <div className="auth-sec">
                <div className="author-info">
                    <img className="auth-img" src={author_profile} alt="" />
                    <h3>{author_name}</h3>
                </div>
                <div className="time">
                    <p>{time} min read .
                    <FontAwesomeIcon style={{cursor: "pointer"}}  onClick={() => handleAddItems(props.course)} icon={faBookmark} />
                    </p>
                </div>
            </div>
            <h1 className="course-name">{content_title}</h1>
            <div className="course-info">
                <p>{course_type}</p>
            </div>
            
            <p style={{cursor: "pointer"}}
                onClick={() => handleAddTime(props.course)}>
                Mark as read
            </p>
        </div>
    );
};

export default Course;
