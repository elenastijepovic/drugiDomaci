import React from 'react';
import '../App.css';
import { Button } from './Button';
import './EnvSection.css';


export default function EnvSection() {
    return (
        <div className="env-container">
            <h1>DURMITOR ADVENTURE </h1>
            <p>Tours In Durmitor National Park</p>

            <div className="env-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get started</Button>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' route='/trailer'>
                    Play Video
                </Button>

            </div>
            <div className="env-part">

            </div>
        </div>
    )
}
