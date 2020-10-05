import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            {/*<video src="/videos/video-1.mp4" autoPlay loop muted />*/}
            <h1>YOU'LL BE PLEASED</h1>
            <p>Apply today</p>

            <div className='hero-btns'>
                <Button className='btns' 
                buttonStyle='btn--outline'
                buttonSize='btn--large'>GET STARTED
                </Button>
                <Button className='btns' 
                buttonStyle='btn--primary'
                buttonSize='btn--large'>SEE WALKTHROUGH 
                <i className='far fa-play-circle' />
                </Button>

            </div>

            <div className="down-button">
                
                <a className="slider" href="#cards" >
                    <i className="fas fa-chevron-down" />
                </a>
            </div>
        </div>
    )
}

export default HeroSection
