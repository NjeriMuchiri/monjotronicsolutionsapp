import React from 'react';
import MidContainer from '../components/midcontainer';
import SliderCarousel from '../components/slider';

const Home = () =>{
    return(
    <>
        <div>
          <SliderCarousel/>
        </div>
        <div>
            <MidContainer/>
          </div>
        </>
    );
};

export default Home;