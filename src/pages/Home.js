import React from 'react';
import MainFooter from '../components/mainfooter';
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
       <div>
         <MainFooter/>
       </div>
        </>
    );
};

export default Home;