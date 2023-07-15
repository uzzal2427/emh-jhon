import React from 'react';
import './Item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Item = (props) => {
    // console.log(props.product);
    const { name, img, price, ratings, seller } = props.product 
    const  handerlAddToCard = props.handerlAddToCard 
    return (
        <div className='item'>
            <div>
                <img src={img} alt="" />
                <h5>{name}</h5>
                <h6>Price:${price}</h6>
                <p id='manu-text'>Manufacturer : {seller}</p>
                <p id='ratting-text'>Ratting: {ratings}</p>
            </div>
            <button onClick={ ()=> handerlAddToCard(props.product)} className='card-btn'>
                Add To Card
                <FontAwesomeIcon icon={faCartShopping} />
            </button>
        </div>
    );
};

export default Item;