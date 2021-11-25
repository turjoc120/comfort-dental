import React from 'react';
import GapSection from '../GapSection/GapSection';
import HeroSec from '../HeroSec/HeroSec';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const HomePage = () => {
    return (
        <div>
            <HeroSec></HeroSec>
            <Services></Services>
            <GapSection></GapSection>
            <Reviews></Reviews>
        </div>
    );
};

export default HomePage;