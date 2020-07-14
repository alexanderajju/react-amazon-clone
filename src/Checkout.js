import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{basket}]=useStateValue();
    return (
        <div className="checkout">
            <img
            className="checkout__add"
             src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
             {basket?.length ===0 ? (
                 <div>
                     <h2>Your Shopping Basket is empty</h2>
                 </div>
             ):(
                 <div>
                     <h2>Your Shopping Basket</h2>
                 </div>
             )}
        </div>
    )
}

export default Checkout
