import React from 'react';
import Images from '../assets/images/Baten.jpg';
import Images02 from '../assets/images/Cocktails(1).jpg';
import Images03 from '../assets/images/Cocktails(2).jpg';
import Images04 from '../assets/images/Free.cooking(1).jpg';
import Images05 from '../assets/images/Cocktails(3).jpg';
import Images06 from '../assets/images/Free.cooking(2).jpg';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const EnhancedSwipeableViews = autoPlay(SwipeableViews);

const Slider = () => {
    return(

        <EnhancedSwipeableViews enableMouseEvents interval={5000}>
            <div className="slide"><img src={Images} className="slide1" /></div>
            <div className="slide"><img src={Images02} className="slide2" /></div>
            <div className="slide"><img src={Images03} className="slide3" /></div>
            <div className="slide"><img src={Images04} className="slide4" /></div>
            <div className="slide"><img src={Images05} className="slide5" /></div>
            <div className="slide"><img src={Images06} className="slide6" /></div>
        
           
      </EnhancedSwipeableViews>
    )
}

export default Slider