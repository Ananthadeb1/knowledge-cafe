import React from 'react';
import "./Bookmark.css"
import { count, totalTime } from '../Main/Main';


const Bookmark = ({title}) => {
    console.log(title)
    
    
    
    
    return (
        <div className='cart'>
             <h4>Spend time on read: {totalTime} min</h4>
            <p>Bookmark Blog: {count}</p>
            {title.map((title)=> <h4 className='title-add'>{title}</h4>) }
        </div>
    );
};


export default Bookmark;