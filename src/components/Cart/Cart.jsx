import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart);
    let total = 0;
    let totalShipping = 0;
    for (const product of cart){
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = total * 0.07;
    const garandTotal = (total + tax + totalShipping);

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${garandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;