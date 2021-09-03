import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>CHECK OUT OUR TOURS!</h1>
            <div className="cards_container">
                <div className="cards_wrapper">

                    <ul className="cards_item">
                        <CardItem src="images/paraglider.jpg" text="Tandem paragliding" label="Flying" path="/paragliding" />
                        <CardItem src="images/waterfall.jpg" text="Canyon Nevidio" label="Canyon" path="/canyon" />
                        <CardItem src="images/bike.jpg" text="E Mountain Bikes" label="Bikes" path="/bike" />
                       
                    </ul>
                
                </div>
            </div>
        </div>
    )
}

export default Cards
