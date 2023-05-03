import React from 'react';
import "./Course.css"

const Course = (props) => {
    const { content_title, content_banner, author_name, author_profile, course_type } = props.course;
    const handleAddToCart = props.handleAddToCart;


    return (
        <div className='course'>
            <img src={content_banner} alt="" />
            <div className='course-info'>
                <h6 className='course-name'>{content_title}</h6>
                <h3>{author_name}</h3>
            </div>
            <button onClick={() => handleAddToCart(props.course)} className='btn-cart'>
                Add to Cart
                {/* <FontAwesomeIcon icon={faShoppingCart} /> */}
                </button>
        </div>
    );
};

export default Course;