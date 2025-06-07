import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar/Navbar';
import NotFound from "../components/Home/NotFound";
const NotFoundPage =()=>{
    return (
        <>
        <Navbar/>
        <NotFound/>
        <Footer/>
        </>
    );
}
export default NotFoundPage;