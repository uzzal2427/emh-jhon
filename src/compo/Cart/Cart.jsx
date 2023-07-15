import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {card} = props
    console.log(card)
    let total = 0;
    let shippingTotal = 0;
    for(const product of card){
        total = total + product.price
        shippingTotal = shippingTotal + product.shipping
    }
    let tax = total * .07;
    const grandTotal = total + shippingTotal + tax;

    return (
        <div className='card'>
            <h2>calculation</h2>
            <p>selected item {card.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shippingTotal}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;