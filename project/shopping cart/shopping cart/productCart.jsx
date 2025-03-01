import React from 'react'
import { Link } from 'react-router-dom'
import iconCart from './assets/images/iconCart.png'

const productCart = (props) => {
    const {id, name, image, price, slug} = props.data;
  return (
    <div className='bg-white p-5 rounded-xl shadow-sm'>
      <Link to={slug}>
      <img src={image} alt='' className='w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#007]' />
      </Link>
      <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
      <div className='flex justify-between items-center'>
        <p>
          $<span className='text-2xl font=medium'>{price}</span>
        </p>
        <button className='bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2'>
          <img src={iconCart} alt="" className='w-5'/>
          add to cart
        </button>
      </div>

    </div>
    
  
  )
}

export default productCart
