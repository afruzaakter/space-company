import React from 'react';
import Banner from './Banner';
import Brands from './Brands';
import HomeSection from './HomeSection';
import Parts from './Parts';
import ShowAddReview from './ShowAddReview';
import UserExpection from './UserExpection';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Brands></Brands>
            <UserExpection></UserExpection>
            <ShowAddReview></ShowAddReview>
            <HomeSection></HomeSection>        
          
        </div>
    );
};

export default Home;