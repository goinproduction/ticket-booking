import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsDetail from '../components/NewsDetail';

const NewsDetailContainer = () => {
    return (
        <>
            <Navbar />
            <NewsDetail />
            <Footer />
        </>
    );
};

export default NewsDetailContainer;
