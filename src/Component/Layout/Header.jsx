import React, { useContext } from 'react'
import { CartContext } from '../MainCart'


const Header = () => {

     const { totalItem } = useContext(CartContext)

     return (
          <>
               <div className='flex items-center justify-between'>
                    <div className='flex gap-5 items-center pb-3 px-1 cursor-pointer'>
                         <div>
                              <svg
                                   className='h-10 w-6' xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                   <path
                                        fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m11 5l-7 7l7 7m-7-7h16"
                                   />
                              </svg>
                         </div>
                         <div>
                              <h1 className='font-semibold text-gray-600 text-lg'>
                                   Continue Shopping
                              </h1>
                         </div>
                    </div>

                    <div className=''>
                         <svg
                              className='h-10 w-9 relative'
                              xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                              <path
                                   fill="none"
                                   stroke="currentColor"
                                   strokeLinecap="round"
                                   strokeLinejoin="round"
                                   strokeWidth="1.5"
                                   d="M3 6h19l-3 10H6L3 6Zm0 0l-.75-2.5M9.992 11h2m2 0h-2m0 0V9m0 2v2M11 19.5a1.5 1.5 0 0 1-3 0m9 0a1.5 1.5 0 0 1-3 0"
                              />
                         </svg>
                         <p className='w-6 h-6 rounded-full bg-blue-700 text-white shadow-sm flex items-center justify-center text-xs absolute top-9 right-9'>{ totalItem}</p>
                    </div>
               </div>
          </>
     )
}

export default Header
