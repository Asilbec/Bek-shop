import React, { useRef } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';

import { useStateContext } from '../context/StateContext';
import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';
import Image from 'next/image';

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart, qty, toggleCartItemQuanitity, onRemove } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if(response.statusCode === 500) return;
    
    const data = await response.json();

    toast.loading('Loading...');

    stripe.redirectToCheckout({ sessionId: data.id });
  }



  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
        type="button"
        className="cart-heading"
        onClick={() => {
          setShowCart(false)}
          }>
          <AiOutlineLeft size={30} color='black' />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
              <button
                type="button"
                onClick={() =>{
                  setShowCart(false)
                } }
                className="btn"
              >
                Continue Shopping
              </button>
          </div>
        )}

        <div className="product-containerz">
          {cartItems.length >= 1 && cartItems.map((item,index) => (
            <div className="product-in-cart" key={index}>
              <Image src={urlFor(item?.image[0])} alt='none' className="cart-product-image" />
              <div className="item-desc">
              {console.log(item)}

                <div className="flextop">
                  <h5>{item.name}</h5>
                  <h5>{item.quantity}</h5>
                  <h4>${item.price}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>${totalPrice.toFixed(2)}</h3>
            </div>
            <div className="btn-container">
              <button type="button" onClick={handleCheckout} className="btn" >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart