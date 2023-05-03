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
    const handleAddToCart = props.handleAddToCart;
    function bookM(){
        console.log("Book");
    } 

    return (
        <div className="course">
            <img className="banner-img" src={content_banner} alt="" />
            <div className="auth-sec">
                <div className="author-info">
                    <img className="auth-img" src={author_profile} alt="" />
                    <h3>{author_name}</h3>
                </div>
                <div className="time">
                    <p style={{cursor: "pointer"}} onClick={bookM}>{time} min read .
                    <FontAwesomeIcon icon={faBookmark} />
                    </p>
                </div>
            </div>
            <h1 className="course-name">{content_title}</h1>
            <div className="course-info">
                <p>{course_type}</p>
            </div>

            <p style={{cursor: "pointer"}}
                onClick={() => handleAddToCart(props.course)}>
                Mark as read
            </p>
        </div>
    );
};

export default Course;
