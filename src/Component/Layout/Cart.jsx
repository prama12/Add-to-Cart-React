import React, { useContext } from 'react'
import Card from '../ItemCard/Card'
import Header from './Header'
import { CartContext } from '../MainCart'


const Cart = () => {
     const { item } = useContext(CartContext)

     return (
          <>
               <div className='bg-white m-2 px-10 py-5 h-full'>
                    <Header />
                    <div className='h-0.5 w-full bg-gray-600 rounded-full mb-10'></div>
                    <div className='mb-5'>
                         <h1 className='font-bold text-2xl '>Shopping Cart</h1>
                         <p className='font-medium text-md'>
                              You Have <span className='font-bold'>6</span> Items In Shopping Cart
                         </p>
                    </div>

                    <div className='w-full h-[400px] bg-gray-100 shadow-md rounded-md px-10 py-5 overflow-y-auto relative'>
                         <div className='grid grid-cols-1 gap-10 pt-5'>
                              {item.map((val, index) => {
                                   console.log(index)
                                   return (
                                        <Card
                                             key={val.id}
                                             {...val}
                                        />
                                   )
                              })}
                         </div>
                    </div>

                    <div className='w-full mt-5'>
                         <div className='flex flex-col justify-end items-end gap-3'>
                              <h1 className=' font-medium text-xl'>Cart Total : <span className=' font-bold'>Rs.12000</span></h1>
                              <div className='flex gap-3'>
                                   <button className='bg-blue-700 text-white flex items-center px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800'>Checkout</button>
                                   <button className='bg-red-600 text-white flex items-center px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700'>Clear All</button>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Cart
