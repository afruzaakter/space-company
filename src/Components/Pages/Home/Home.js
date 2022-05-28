import React from 'react';
import Banner from './Banner';
import Brands from './Brands';
import HomeSection from './HomeSection';
import Parts from './Parts';
import ShowAddReview from './ShowAddReview';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <Brands></Brands>
            <ShowAddReview></ShowAddReview>
            <HomeSection></HomeSection>        
          
        </div>
    );
};

export default Home;