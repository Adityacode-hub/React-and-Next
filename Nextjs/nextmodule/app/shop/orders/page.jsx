'use client';
import React from 'react'
import {useRouter} from 'next/navigation'
const Order = () => {
    const router=useRouter();
  return (
    <>
   
    <div className='flex grid gap-2 '>
      <button className='hover:cursor-pointer px-2 py-2 rounded-2xl bg-amber-400 text-1xl font-black hover:bg-blue-700 ' onClick={()=>router.push("/shop/orders/products")}>Go To Products</button>
      <button className='px-2 py-2  rounded-2l font-blue bg-red-400 text-black rounded-2xl font-bold'onClick={()=>router.refresh()}>Refresh</button>
    </div>
  
    </>
  

  )
  
}

export default Order