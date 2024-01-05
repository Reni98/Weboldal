import React from "react";
import Button from './Button';
import './HeroSection.css';

function HeroSection(){
    return(
        <div className="hero-container">
            <video src="/video/video-2.mp4" autoPlay loop muted />
            <h1> Mi vagyunk TheVr</h1>
            <p>Légy részese a csapatnak</p>
            <div className="hero-bnts">
                <Button
                 className="btns"
                 buttonStyle="btn--outlin"
                 buttonSize='btn--large'>
                    Kezd el
                </Button>
                <Button
                 className="btns"
                 buttonStyle="btn--primary"
                 buttonSize='btn--large'>
                   Trailer <i class="fa-solid fa-circle-play"></i>
                </Button>
            </div>
        </div>
    )
}
export default HeroSection;