import React from 'react'
import { FaStar } from 'react-icons/fa'
import { addCart } from '../store/cartSlice'
import { useDispatch } from 'react-redux'

function ProductCard({ product }) {
  const dispatch = useDispatch()
  const handleAddCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addCart(product));
    alert("Product Added Successfully")
  }


  return (

    <div className='container bg-white shadow rounded-l relative border transform transition-transform duration-300 hover:scale-105 p-2 '>
      <img src={product.image} alt={product.name} className='w-full h-48 object-contain mb-4' />
      <h3 className='text-lg font-semibold'>{product.name}</h3>
      <p className='text-gray-500'>₹{product.price}</p>
      <div className='flex items-center '>
        <FaStar className='text-yellow-300' />
        <FaStar className='text-yellow-300' />
        <FaStar className='text-yellow-300' />
        <FaStar className='text-yellow-300' />
        <FaStar className='text-gray-300' />
      </div>
      <div className='absolute bottom-3.5 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all'
        onClick={(e) => handleAddCart(e, product)}>
        <span className='group-hover:hidden'>+</span>
        <span className='hidden group-hover:block'>Add to Cart</span>
        
      </div>
    </div>

  )
}

export default ProductCard
