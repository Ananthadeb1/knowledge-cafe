import React from 'react';
import "./Bookmark.css"
import { count, title, totalTime } from '../Main/Main';
import Time from '../Time/Time';
// import { time } from '../Main/Main';


const Bookmark = ({bookmark}) => {
    console.log(bookmark)
    console.log(typeof (bookmark))

    // console.log(bookmark.map(console.log(bookmark.content_title)))
    
    return (
        <div className='cart'>
             <h4>Spend time on read: {totalTime} min</h4>
            <p>Bookmark Blog: {count }</p>
            <h4>{title}</h4>
        </div>
    );
};


export default Bookmark;