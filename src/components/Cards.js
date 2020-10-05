import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div id="cards" className="cards">
            <h1>Explore the nest in your neighborhood</h1>
            <div className="cards__container">
                <div className='card__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src="images/img-1.jpg"
                        text="Deep learning opportunities"
                        label='Learn'
                        path='/services'
                        />
                        <CardItem 
                        src="images/img-2.jpg"
                        text="Get outside and into nature"
                        label='Play'
                        path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem 
                        src="images/img-3.jpg"
                        text="Foster the youthful creativity"
                        label='Create'
                        path='/services'
                        />
                        <CardItem 
                        src="images/img-4.jpg"
                        text="Engagement that promotes growth"
                        label='Grow'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
