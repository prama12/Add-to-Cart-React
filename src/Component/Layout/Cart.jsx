import React, { useContext } from 'react'
import Card from '../ItemCard/Card'
import Header from './Header'
import { CartContext } from '../MainCart'


const Cart = () => {
     const { item, clearCart, totalItem, totalAmount } = useContext(CartContext)

     if (item.length === 0) {
          return (
               <>
                    <div className='bg-white m-2 px-10 py-5 h-full'>

                         <Header />

                         <div className='h-0.5 w-full bg-gray-600 rounded-full mb-5'></div>
                         <div className='mb-5'>
                              <h1 className='font-bold text-xl '>Shopping Cart</h1>
                              <p className='font-medium text-sm'>
                                   You Have <span className='font-bold'>{totalItem}</span> Items In Shopping Cart
                              </p>
                         </div>

                         <div className='w-full h-[400px] bg-gray-100 shadow-md rounded-md px-10 py-5 overflow-y-auto flex  justify-center items-center relative'>
                              <h1 className='font-bold text-lg text-blue-600'> You have no item in your cart. Please Continue Shopping.</h1>
                         </div>
                    </div>
               </>
          )
     }

     return (
          <>
               <div className='bg-white m-2 px-10 py-5 h-full'>
                    <Header />
                    <div className='h-0.5 w-full bg-gray-600 rounded-full mb-5'></div>
                    <div className='mb-5'>
                         <h1 className='font-bold text-2xl '>Shopping Cart</h1>
                         <p className='font-medium text-md'>
                              You Have <span className='font-bold'>{totalItem}</span> Items In Shopping Cart
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
                              <h1 className=' font-medium text-xl'>Cart Total : <span className=' font-bold'>Rs.{totalAmount}</span></h1>
                              <div className='flex gap-3'>
                                   <button className='bg-blue-700 text-white flex items-center px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800'>Checkout</button>
                                   <button className='bg-red-600 text-white flex items-center px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700' onClick={clearCart}>Clear All</button>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Cart
