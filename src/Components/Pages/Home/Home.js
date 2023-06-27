import React from 'react';
import Banner from './Banner';
import Brands from './Brands';
import HomeSection from './HomeSection';
import UserExpection from './UserExpection';
import Project from './Project';
import BestDesign from './BestDesign';





const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeSection></HomeSection> 
            <Brands></Brands>
            <UserExpection></UserExpection>
            <Project></Project>
            <BestDesign></BestDesign>
          
        </div>
    );
};

export default Home;