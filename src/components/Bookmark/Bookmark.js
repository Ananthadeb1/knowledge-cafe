import React from 'react';
import "./Bookmark.css"
import { count, title, totalTime } from '../Main/Main';
import Time from '../Time/Time';
// import { time } from '../Main/Main';


const Bookmark = ({bookmark}) => {
    console.log(bookmark)
    console.log(typeof (bookmark))
    let name ;
    if(bookmark.length === 0) name = "";
    else {
        name = bookmark[bookmark.length-1].content_title;
        // for(let i=0 ; i<bookmark.length;i++){
        //     let newName = bookmark[i].id;
        //     name.concat(newName);
        //     console.log(bookmark[i].id)
        //     console.log(newName)
        // }
    }
    
    

console.log(name)
    return (
        <div className='cart'>
             <h4>Spend time on read: {totalTime} min</h4>
            <p>Bookmark Blog: {count }</p>
            <h4>{title}</h4>
        </div>
    );
};


export default Bookmark;