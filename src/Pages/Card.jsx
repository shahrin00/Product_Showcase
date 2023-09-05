import React from 'react';

const Card = ({allProduct}) => {
    return (
        <div>
        <img src={allProduct?.thumbnail} alt=""  className='w-[800px] h-[400px]'/>
            <h1 className='font-bold text-xl'>{allProduct?.title}</h1>
        </div>
    );
};

export default Card;