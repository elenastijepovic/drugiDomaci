import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';


export default function Info() {
    return (
        <div className='info'>
            <h1>DURMITOR NATIONAL PARK: TOURIST INFO</h1>
            <div className="cards_container">
                <div className="cards_wrapper">

                    <ul className="cards_item">
                        <CardItem src="images/picnic.jpg" text="While the mountains are great for hiking, the lakes are perfect for something a bit more tranquil. Put together a hamper and head to a lake for a picnic." label="Blake Lake" path="/info" />
                        <CardItem src="images/kuk.jpg" text="And for the ultimate challenge for Durmitor National Park hiking, you can tackle the park’s highest mountain, Bobotov Kuv." label="Hiking"  path="/info"/>
                        <CardItem src="images/tara.jpeg" text="Tara Canyon is the deepest canyon in Europe and it cradles the wild Tara River, with its alternating clear blue waters and thrashing white rapids for rafting." label="Tara" path="/info" />
                        <CardItem src="images/thrill.jpg" text="It’s this mix of climates – and the special ecosystem they create – that is one of the main reasons Durmitor National Park has been named a World Heritage Site. Living in the wilds of the park are animals like brown bears, wolves, wild cats, eagles and owls.." label="Climate" path="/info" />

                    </ul>

                </div>
            </div>
        </div>
    )

}
