import React from 'react';
import Banner from './Banner';
import Brands from './Brands';
import HomeSection from './HomeSection';
import Parts from './Parts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
           
            <Brands></Brands>
            <HomeSection></HomeSection>
           
          
        </div>
    );
};

export default Home;