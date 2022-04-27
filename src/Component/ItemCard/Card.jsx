import React, { useContext } from 'react'
import { CartContext } from '../MainCart'

const Card = ({ id, name, description, price, img, amount }) => {

     const { removeItem, increment } = useContext(CartContext)

     return (
          <>
               <div className='grid md:grid-cols-5 grid-cols-1 gap-5 md:gap-2 lg:gap-3 px-2 relative '>

                    <div className='flex items-center justify-center md:justify-start'>
                         <div className='w-24 h-28 bg-black rounded-md overflow-hidden'>
                              <img src={img} className="w-24 h-28" alt="photo" />
                         </div>
                    </div>

                    <div className='flex items-center justify-center'>
                         <div className='flex flex-col items-center justify-center md:items-start'>
                              <h1 className='font-medium text-lg capitalize text-center md:text-left'>{name}</h1>
                              <p className='text-sm text-gray-700 capitalize text-center md:text-left'>{description}</p>
                         </div>
                    </div>

                    <div className='flex gap-2 items-center justify-center font-medium text-lg'>
                         <p>
                              <button className='rounded-full flex items-center justify-center w-5 h-5 hover:bg-slate-300' >
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        ariaHidden="true" role="img"
                                        width="1em" height="1em"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 24 24">
                                        <path
                                             fill="none" stroke="currentColor"
                                             strokelinecap="round" strokeWidth="2"
                                             d="M20 12H4"
                                        />
                                   </svg>
                              </button>
                         </p>
                         <p className='border border-black h-6 w-10 flex items-center justify-center rounded-sm'>{amount}</p>
                         <p>
                              <button className='rounded-full flex items-center justify-center w-5 h-5 hover:bg-slate-300' onClick={() => increment(id)}>
                                   <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        ariaHidden="true" role="img"
                                        width="1em" height="1em"
                                        preserveAspectRatio="xMidYMid meet"
                                        viewBox="0 0 1024 1024">
                                        <path
                                             fill="currentColor"
                                             d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z"
                                        />
                                        <path fill="currentColor"
                                             d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8Z"
                                        />
                                   </svg>
                              </button>
                         </p>
                    </div>

                    <div className='flex items-center md:justify-end justify-center font-semibold text-lg'>{price}</div>

                    <div className='flex items-center justify-end md:relative absolute top-[-30px] md:top-0 md:right-0 right-[-8px] font-medium text-lg'>
                         <button
                              className='rounded-full flex items-center justify-center w-6 h-6 hover:bg-slate-300'
                              onClick={() => removeItem(id)}
                         >
                              <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   ariaHidden="true" role="img"
                                   width="1em" height="1em"
                                   preserveAspectRatio="xMidYMid meet"
                                   viewBox="0 0 24 24">
                                   <path
                                        fill="none" stroke="currentColor"
                                        strokeLinecap="round" strokeWidth="2"
                                        d="M20 20L4 4m16 0L4 20"
                                   />
                              </svg>
                         </button>
                    </div>
               </div>

               <div className='h-0.5 w-full bg-gray-600 rounded-full'></div>
          </>
     )
}

export default Card
