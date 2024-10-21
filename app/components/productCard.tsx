import React from 'react'
import AddToCart from './AddToCart';



const ProductCard = () => {
  return (
    <div className='p-5 my-5 bg-blue-400 text-white text-xl hover:bg-blue-500' >
        <AddToCart />
    </div>
  )
}

export default ProductCard