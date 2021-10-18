import React from 'react';
import fade from '../assets/img/11.png';

const FadeLoading = () => {
    return (
        <div className='logo-loading'>
            <img className='animated tada' src={fade} />
        </div>
    );
};

export default FadeLoading;
