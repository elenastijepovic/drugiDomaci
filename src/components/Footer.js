import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className="footer-container">
           <section className="footer-subscription">
               <p className="footer-subscription-heading">
                   Subscribe to our newsletter!
               </p>
               <p className="footer-subscription-text">
                    Be updated on latest adventures.
               </p>
               <div className="input-areas">
                   <form>
                       <tr>
                           <td>
                           <input type="email" name="email" placeholder="Your email"></input>
                           </td>
                       </tr>
                    
                       <tr>
                           <td>
                           <Button buttonStyle="btn--outline">Subscribe</Button>
                           </td>
                       </tr>
                       
                   </form>

               </div>
           </section>
         
        </div>
    )
}

export default Footer
