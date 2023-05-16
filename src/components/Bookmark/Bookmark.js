import React from 'react';
import "./Bookmark.css"


const Bookmark = ({title,time,count}) => {
    return (
        <div className='cart'>
             <h4>Spend time on read: {time} min</h4>
            <p>Bookmark Blog: {count}</p>
            {title.map((title)=> <h4 className='title-add'>{title}</h4>) }
        </div>
    );
};


export default Bookmark;