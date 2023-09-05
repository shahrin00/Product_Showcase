import { list } from 'postcss';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Home = () => {
    const[product,setProduct]=useState([]);
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(json => setProduct(json.products))

    },[]);
    return (
        <div className='flex justify-center mt-4 p-10'>
            <div className='grid grid-cols-3 gap-7'>
           {
                product.map((product,i)=><Card key={i} allProduct={product}></Card>)
            }
        </div>
        </div>
    );
};

export default Home;