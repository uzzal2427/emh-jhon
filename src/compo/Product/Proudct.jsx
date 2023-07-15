import React, { useEffect, useState } from 'react';
import './Proudct.css'
import Item from '../Item/Item';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Proudct = () => {
    const [products , setProducts] = useState([]);

    const [card , setCard] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[]);
    useEffect(()=>{
        const storedCard = getShoppingCart();
        // console.log(storedCard);
        const savedCard = [];
        for(const id in storedCard){
            // console.log(id)
            const addProduct = products.find(product => product.id === id);
            // console.log(addProduct);

          if(addProduct){
            const quantity = storedCard[id];
            addProduct.quantity = quantity  
            savedCard.push(addProduct)
          }

            console.log(addProduct)
        }
        setCard(savedCard);
    },[products]);
    
    const handerlAddToCard =(product)=>{
        // console.log(product);
        const newCard = [...card, product];
        setCard(newCard);
        addToDb(product.id)
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
              <Cart 
              card ={card}
              ></Cart>
           </div>
        </div>
    );
};

export default Proudct;