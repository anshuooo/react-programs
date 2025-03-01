import React from 'react'
import { products } from '../products'
import productCart from '../../productCart'

function Home() {
  return (
    <div>
          <h1 className='text-3xl my-5'> list prodeucts </h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {products.map((product, key) =>
           <productCart key={key} data={product}/>
        )}
      </div>
    </div>
  )
}

export default Home
