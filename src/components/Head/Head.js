import React from 'react';
import "./Head.css"

const Head = () => {
    return (
        <nav className='header'>
            <h1>Geyan Baba</h1>
            <div className='profile-sec'>
                <a href='/contact'>Contact us</a>
                <a href='/review'>Review</a>
                <img src='https://img.freepik.com/free-vector/lovely-hand-drawn-education-concept_23-2147919752.jpg?w=740&t=st=1683042083~exp=1683042683~hmac=e9ad0ae544dce12030c2ade897f8fdcd745f5f944a7cf56e6cddcb2a9b0ba1fa' alt='no img' className='header-profile'></img>
            </div>
        </nav>
    );
};

export default Head;