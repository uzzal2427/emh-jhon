import React, { useEffect, useState } from 'react';
import './Proudct.css'
import Item from '../Item/Item';

const Proudct = () => {
    const [products , setProducts] = useState([]);

    const [card , setCard] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[]);
    
    const handerlAddToCard =(product)=>{
        // console.log(product);
        const newCard = [...card, product];
        setCard(newCard);
    }

    return (
        <div className='product-section'>
           <div className="item-section">
                {
                    products.map(product => <Item 
                    key={product.id}
                    product={product}
                    handerlAddToCard={handerlAddToCard}
                    ></Item>)
                }
           </div>
           <div className="card-section">
                <h2>calculation</h2>
                <p>selected item {card.lengthgit init}</p>
           </div>
        </div>
    );
};

export default Proudct;